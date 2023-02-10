import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import threeCharacters from '../../images/three_characters.png';
import StackingCard from '../StackingCard/StackingCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadStakingInfo } from '../../store/reducer/staking_reducer';
import './Staking.css';
import { stakeIds } from '../../store/reducer/staking_reducer/stakingInitialStates';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
// import ChristmasAnimatedBackground from '../ChristmasComponents/ChristmasAnimatedBackground/ChristmasAnimatedBackground';
// import ChristmasBanner from '../ChristmasComponents/Banners/ChristmasBanner';

function Staking() {
	const [switchBtnToggle, setSwitchBtnToggle] = useState(true);
	const { connected } = useSelector((state) => state.web3);
	const dispatch = useDispatch();
	const allStakes = useSelector((state) => state.staking);
	useEffect(() => {
		const interval = setInterval(() => {
			if (connected) {
				for (let i = 0; i < stakeIds.length; ++i) {
					dispatch(loadStakingInfo(stakeIds[i]));
				}
			}
		}, 10000);
		return () => {
			clearInterval(interval);
		};
	});
	// Checks if opened tab matches the isCompleted value of stake.
	// i.e if tab is "Live" and isCompleted is False OR
	// if tab is "Completed" and isCompleted is True
	const visibleCards = [];
	stakeIds.forEach((val) => {
		if (!allStakes[val].isCompleted === switchBtnToggle)
			visibleCards.push(
				<div className='cardwrap'>
					<StackingCard stakeId={val} />
				</div>,
			);
	});

	return (
		<div className="staking-wrapper">
			{/* <ChristmasAnimatedBackground /> */}
			{/* { <AnimatedBackground /> } */}
			
			{<div className="project-banner-container">
				<div className="banner-container-content">
					<div>
						<h2><span>Ai</span>Memes Staking Pools</h2>
						{/* <p>Get rewarded by staking (and locking) your $AIMEME Tokens</p> */}
					</div>{
					
					/*
					ESTO ES EL BANNER 
					
					<div className="banner-img">
						<img src={threeCharacters} alt=" Three Characters" />
					</div>
					
					*/}
				</div>
			</div> }

			<div className="staking-cards-container">
				<Container fluid>
					<Row>
						<Col>
							<div className="switch-btn">
								<nav>
									<ul>
										<li>
											<button
												onClick={() => setSwitchBtnToggle(!switchBtnToggle)}
												className={`${
													switchBtnToggle
														?  'switch-btn-toggle'
														: 'switch-btn-toggle-disable'
												}`}
											>
												<span>Active</span>
											</button>
										</li>
										<li>
											<button
												onClick={() => setSwitchBtnToggle(!switchBtnToggle)}
												className={`${
													switchBtnToggle
														? 'switch-btn-toggle-disable'
														: 'switch-btn-toggle'
												}`}
											>
												<span>Completed</span>
											</button>
										</li>
									</ul>
								</nav>
							</div>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className="staking-card-pad">{visibleCards}</Row>
				</Container>
			</div>
		</div>
	);
}

export default Staking;
