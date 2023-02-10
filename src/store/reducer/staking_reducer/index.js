import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memepad from "./memepad.json";
import Web3 from "web3";
import { stakeIds, stakingState } from "./stakingInitialStates";

export const initializeStaking = createAsyncThunk(
  "InitializeLaunches",
  async (action, thunkAPI) => {
    const { web3 } = thunkAPI.getState().web3;
    const mepadTokenContract = new web3.eth.Contract(
      memepad.mepadTokenAbi,
      memepad.mepadTokenAddress
    );
    const lpTokenContract = new web3.eth.Contract(
      memepad.lpTokenAbi,
      memepad.lpTokenAddress
    );
    const decimals = Number(await mepadTokenContract.methods.decimals().call());
    thunkAPI.dispatch(
      stakingSlice.actions.setMepadToken({ mepadTokenContract, decimals ,lpTokenContract})
    );
    for (let i = 0; i < stakeIds.length; ++i) {
      thunkAPI.dispatch(initStake(stakeIds[i]));
    }
  }
);

export const initStake = createAsyncThunk(
  "InitStake",
  async (action, thunkAPI) => {
    await thunkAPI.dispatch(initStakingContract(action));
    await thunkAPI.dispatch(initStakingInfo(action));
    await thunkAPI.dispatch(loadStakingInfo(action));
  }
);

export const initStakingContract = createAsyncThunk(
  "InitContract",
  async (action, thunkAPI) => {
    try {
      const { web3 } = thunkAPI.getState().web3;
      const binanceChainId = memepad.network;
      const chainId = await web3.eth.getChainId();
      if (chainId !== binanceChainId)
        // eslint-disable-next-line
        throw "Please Connect to Binance Smart Chain";
      const stakingContract = new web3.eth.Contract(
        memepad[action].stakingAbi,
        memepad[action].stakingAddress
      );
      return {
        stakingContract,
        stakeId: action,
      };
    } catch (error) {
      console.log("Error initializing contract: ", error);
      throw error;
    }
  }
);

export const initStakingInfo = createAsyncThunk(
  "InitInfo",
  async (action, thunkAPI) => {
    try {
      const { decimals } = thunkAPI.getState().staking;
      const { stakingContract } = thunkAPI.getState().staking[action];
      const removeDecimals = (val) => {
        return Number(val) / 10 ** decimals;
      };
      const rewardPerBlock = removeDecimals(
        await stakingContract.methods.annualRewardPerToken().call()
      );
      const bonusEndBlock = removeDecimals(
        await stakingContract.methods.bonusEndBlock().call()
      );
      return {
        rewardPerBlock,
        stakeId: action,
      };
    } catch (error) {
      console.log("Error initializing info:", error);
      throw error;
    }
  }
);

export const loadStakingInfo = createAsyncThunk(
  "LoadInfo",
  async (action, thunkAPI) => {
    try {
      const { web3, address } = thunkAPI.getState().web3;
      const { lpTokenContract, mepadTokenContract, decimals } = thunkAPI.getState().staking;
      const { stakingContract } = thunkAPI.getState().staking[action];
      const removeDecimals = (val) => {
        return (Number(val) / 10 ** decimals) - 0.01; //security minus
      };
      const responses = await Promise.all([
        mepadTokenContract.methods.balanceOf(address).call(),
        stakingContract.methods.userInfo(address).call(),
        stakingContract.methods.pendingReward(address).call(),
        stakingContract.methods.totalStakingTokens().call(),
        mepadTokenContract.methods
          .allowance(address, memepad[action].stakingAddress)
          .call(),
        stakingContract.methods.bonusEndBlock().call(),
        web3.eth.getBlockNumber(),
        lpTokenContract.methods
        .allowance(address, memepad[action].stakingAddress)
        .call(),
        lpTokenContract.methods.balanceOf(address).call(),
      ]);
      return {
        pendingReward: removeDecimals(responses[2]),
        totalStakingTokens: removeDecimals(responses[3]),
        mepadTokens: removeDecimals(responses[0]),
        stakedAmount: removeDecimals(responses[1].amount),
        enabled: Boolean(Number(responses[4]) > Number(responses[0])),
        isCompleted: Number(responses[5]) < Number(responses[6]),
        stakeId: action,
        lpAllowance: Boolean(Number(responses[7]) > Number(responses[0])),
        lpBalance: Number(responses[8])
      };
    } catch (error) {
      console.log("Error in loading info:", error);
      throw error;
    }
  }
);

export const withdrawAndCollectReward = createAsyncThunk(
  "WithdrawAndCollectReward",
  async (action, thunkAPI) => {
    try {
      const { address } = thunkAPI.getState().web3;
      const { stakingContract } = thunkAPI.getState().staking[action.id];
      const { decimals } = thunkAPI.getState().staking;
      await stakingContract.methods
        .withdraw(
          (action.amount * 10 ** decimals).toLocaleString("fullwide", {
            useGrouping: false,
            maximumFractionDigits: 20,
          })
        )
        .send({ from: address });
      thunkAPI.dispatch(loadStakingInfo(action.id));
    } catch (error) {
      console.log("Cant Withdraw MEPAD: ", error);
    }
  }
);

export const stakeMepad = createAsyncThunk(
  "StakeMEPAD",
  async (action, thunkAPI) => {
    try {
      const { address } = thunkAPI.getState().web3;
      const { stakingContract } = thunkAPI.getState().staking[action.id];
      const { decimals } = thunkAPI.getState().staking;
      await stakingContract.methods
        .deposit(
          (action.amount * 10 ** decimals).toLocaleString("fullwide", {
            useGrouping: false,
            maximumFractionDigits: 20,
          })
        )
        .send({ from: address });
      thunkAPI.dispatch(loadStakingInfo(action.id));
    } catch (error) {
      console.log("Cant Stake MEPAD: ", error);
    }
  }
);

export const approveMepadTokens = createAsyncThunk(
  "ApproveMEPADTokens",
  async (action, thunkAPI) => {
    try {
      const { address } = thunkAPI.getState().web3;
      const { mepadTokenContract } = thunkAPI.getState().staking;
      const maxUint = Web3.utils
        .toBN(2)
        .pow(Web3.utils.toBN(256))
        .sub(Web3.utils.toBN(1));
      await mepadTokenContract.methods
        .approve(memepad[action].stakingAddress, maxUint)
        .send({ from: address });
      thunkAPI.dispatch(loadStakingInfo(action));
    } catch (error) {
      console.log("Error in loading info:", error);
      throw error;
    }
  }
);

export const approveLpTokens = createAsyncThunk(
  "ApproveLpTokens",
  async (action, thunkAPI) => {
    try {
      const { address } = thunkAPI.getState().web3;
      const { lpTokenContract } = thunkAPI.getState().staking;
      const maxUint = Web3.utils
        .toBN(2)
        .pow(Web3.utils.toBN(256))
        .sub(Web3.utils.toBN(1));
      await lpTokenContract.methods
        .approve(memepad[action].stakingAddress, maxUint)
        .send({ from: address });
      thunkAPI.dispatch(loadStakingInfo(action));
    } catch (error) {
      console.log("Error in loading info:", error);
      throw error;
    }
  }
);

const stakingSlice = createSlice({
  name: "StakingReducer",
  initialState: stakingState,
  reducers: {
    setMepadToken: (state, action) => {
      state.mepadTokenContract = action.payload.mepadTokenContract;
      state.decimals = action.payload.decimals;
      state.lpTokenContract = action.payload.lpTokenContract;
    },
  },
  extraReducers: {
    [initStakingContract.fulfilled]: (state, action) => {
      const stakeId = action.payload.stakeId;
      state[stakeId].stakingContract = action.payload.stakingContract;
    },
    [initStakingInfo.fulfilled]: (state, action) => {
      console.log("initInfo fulfilled");
      const stakeId = action.payload.stakeId;
      state[stakeId].rewardPerYear = action.payload.rewardPerBlock;
    },
    [loadStakingInfo.fulfilled]: (state, action) => {
      console.log("loadInfo fulfilled");
      const stakeId = action.payload.stakeId;
      state[stakeId].pendingReward = action.payload.pendingReward;
      state[stakeId].totalStakingTokens = action.payload.totalStakingTokens;
      state.mepadTokens = action.payload.mepadTokens;
      state[stakeId].lpAllowance = action.payload.lpAllowance;
      state[stakeId].lpBalance = action.payload.lpBalance;
      state[stakeId].enabled = action.payload.enabled;
      state[stakeId].stakedAmount = action.payload.stakedAmount;
      state[stakeId].isCompleted = action.payload.isCompleted;
    },
  },
});

export const stakingReducer = stakingSlice.reducer;
export const { setMepadToken } = stakingSlice.actions;
