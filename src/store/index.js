import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { web3Reducer } from './reducer/web3_reducer';
import { stakingReducer } from './reducer/staking_reducer';
import { launchReducer } from './reducer/launch_reducer';
import { nftReducer} from './reducer/purchaseNFT_reducer/indexNFT';
// const store = createStore(reducer, applyMiddleware(thunk))
const store = configureStore({
  reducer: {
    web3: web3Reducer,
    staking: stakingReducer,
    nft: nftReducer,
    launch: launchReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export default store;
