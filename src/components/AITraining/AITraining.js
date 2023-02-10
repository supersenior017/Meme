import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import threeCharacters from '../../images/three_characters.png';
import StackingCard from '../StackingCard/StackingCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadStakingInfo } from '../../store/reducer/staking_reducer';
import './AITraining.css';
import { stakeIds } from '../../store/reducer/staking_reducer/stakingInitialStates';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
// import ChristmasAnimatedBackground from '../ChristmasComponents/ChristmasAnimatedBackground/ChristmasAnimatedBackground';
// import ChristmasBanner from '../ChristmasComponents/Banners/ChristmasBanner';
import icon from '../../images/setting.png';
import Loader from "react-loading-indicators";


const SERVER = 'https://example-service-t8vd.onrender.com'

function AITraining() {
	const [switchBtnToggle, setSwitchBtnToggle] = useState(true);
	const { connected } = useSelector((state) => state.web3);
	const dispatch = useDispatch();
	const allStakes = useSelector((state) => state.staking);
	const ref = useRef();
	const [isDropdownOpend, setDropdownOpen] = useState(false);
	const [quality, setQuality] = useState('small');
	const [text, setText] = useState('');
	const [image, setImage] = useState('');
	const [indicator, setIndicator] = useState(false);

	const DropDownlist = () => {
		return <div style={{ flexDirection: 'row', display: 'flex' }}>
			<button className={quality === 'small' ? 'dropdown-select' : 'dropdown'} onClick={() => dropdownSelected('small')}>Low Quality</button>
			<button className={quality === 'medium' ? 'dropdown-select' : 'dropdown'} onClick={() => dropdownSelected('medium')}>Medium Quality</button>
			<button className={quality === 'large' ? 'dropdown-select' : 'dropdown'} onClick={() => dropdownSelected('large')}>High Quality</button>
		</div>
	}

	function dropdownSelected(val) {
		setQuality(val);
		setDropdownOpen(false)
	}

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
				<Col lg={6} md={12}>
					<StackingCard stakeId={val} />
				</Col>,
			);
	});

	async function load_picture() {
		if (text === '') {
			return alert('please add some text')
		}
		try {

			setIndicator(true); // start loading 
			const response = await fetch(SERVER + '/openai/generateimage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					prompt: text,
					size: quality,
				}),
			});

			if (!response.ok) {

				setIndicator(false); // stop loading
				alert('That image could not be generated');
			}

			const data = await response.json();
			setImage(data.data);
			setIndicator(false); // stop loading
		} catch (error) {
			setIndicator(false); // stop loading
			alert(error);
		}

	}

	return (
		<div className="staking-wrapper">
			{/* <ChristmasAnimatedBackground /> */}
			{/* { <AnimatedBackground /> } */}

			{<div className="project-banner-container">
				<div className="banner-container-content-train">
					<div className="search-title" >
						<h1 className="title-name">Ai</h1>
						<h1 className="title-name2">Memes</h1>
					</div>
					<p style={{ color: '#A7A7A7', textAlign: 'center' }} className="desc">Train to create the best Memes</p>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

					<div className='name-input-div' onClick={() => {
						ref.current?.focus();
					}} >
						<input ref={ref} className='name-input' placeholder={'Describe your image'} onChange={(e) => {
							setText(e.target.value)
						}} />
						<img className="filter_icon" style={{ width: 14, height: 14 }} src={icon} onClick={() => {
							setDropdownOpen(!isDropdownOpend)
						}} />
					</div>
					<div >
						{isDropdownOpend ? DropDownlist() : false}
					</div>
					<button className="generate-btn" onClick={load_picture}>Generate</button>
					{
						!indicator && image && image !== '' && (
							<img className="generated-image" src={image} />
						)
					}
					{
						indicator && (
							<Loader color={'grey'} size={'large'} />
						)
					}
				</div>

			</div>}
		</div>
	);
}

export default AITraining;
