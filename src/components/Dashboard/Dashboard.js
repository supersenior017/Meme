import React from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Projects from '../../components/Projects/Projects';
import Staking from '../../components/Staking/Staking';
import AITraining from '../../components/AITraining/AITraining';
import '../../App.css';
import Footer from '../../components/Footer/Footer';
import CardDetails from '../../components/CardDetails/CardDetails';
import TermsAndCondition from '../../components/TermsAndCondition/TermsAndCondition';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy';
import { useDispatch, useSelector } from 'react-redux';
import {
	connectWallet,
	fetchBalance,
	initWeb3,
} from '../../store/reducer/web3_reducer';
import ConnectModal from '../../components/Modal';
import '../../UpdatedSidebar.css';
import logo from '../../images/logo.svg';
import Sidebar from '../../components/sidebar/Sidebar';
import { projIds } from '../../store/reducer/launch_reducer/projectInitialStates';
import { loadLaunchInfo } from '../../store/reducer/launch_reducer';
import connectLogo from '../../images/connect-logo.svg';
// import ChristmasAnimatedBackground from '../ChristmasComponents/ChristmasAnimatedBackground/ChristmasAnimatedBackground';
// import ChristmasLogo from '../ChristmasComponents/Logo/ChristmasLogo';
// import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

//- View Imports
import Celebrity from '../Celebrity/Celebrity';

function Dashboard(props) {
	const [modalShow, setModalShow] = useState(false);
	const [title, setTitle] = useState(null);
	const dispatch = useDispatch();
	const { connected, shortAddress, balance } = useSelector(
		(state) => state.web3,
	);
	const [showSidebar, setShowSidebar] = useState(true);
	let location = useLocation();

	const getToggleStatus = (props) => {
		setShowSidebar(!showSidebar);
	};

	useEffect(() => {
		if (location.pathname === '/dashboard/celebrity-nfts') {
			setTitle('Mint your NFTs');
		} else if (location.pathname === '/dashboard/staking') {
			setTitle('Staking');
		}
		else if (location.pathname === '/dashboard/aiTraining') {
			setTitle('AI Training');
		}
		const interval = setInterval(() => {
			if (connected) dispatch(fetchBalance());
		}, 3000);
		const interval2 = setInterval(() => {
			if (connected) {
				for (let i = 0; i < projIds.length; ++i) {
					dispatch(loadLaunchInfo(projIds[i]));
				}
			}
		}, 10000);
		return () => {
			clearInterval(interval);
			clearInterval(interval2);
		};
	});

	const fixDecimals = (val, dec = 0) => {
		if (!val || val == Infinity) return 0;
		return val.toLocaleString('fullwide', {
			useGrouping: false,
			maximumFractionDigits: dec,
		});
	};

	const logoElement = <img src={connectLogo} alt="Connect Logo" />;

	return (
		<div className="main-layout">
			<aside className={`sidebar-container ${showSidebar && 'sidebar-toggle'}`}>
				<div className="sidebar-body">
					<Sidebar getToggleStatus={getToggleStatus} />
				</div>
			</aside>
			<div className="layout-content">
				<header className="header-container">
					<button
						className="Hamburger_container__3wFvX Header_hamburger2"
						onClick={() => setShowSidebar(!showSidebar)}
					>
						<span
							className={`Hamburger_dash__20BhT ${
								!showSidebar && 'hamburger-first-child'
							}`}
						></span>
						<span
							className={`Hamburger_dash__20BhT ${
								!showSidebar && 'middle-hamburger-hide'
							}`}
						></span>
						<span
							className={`Hamburger_dash__20BhT ${
								!showSidebar && 'hamburger-last-child'
							}`}
						></span>
					</button>
					<div className="header-logo-container">
						{/* <ChristmasLogo mobile /> */}
					</div>
					<strong className="Header_title__2eSkT">{title}</strong>
					<div className="Header_wallet__1DOlJ">
						{connected ? (
							<span className="header-wallet-balance">
								${fixDecimals(balance, 4)}BNB
							</span>
						) : null}
						<button
							onClick={
								connected
									? () => {
											setModalShow(true);
									  }
									: () => {
											dispatch(connectWallet());
									  }
							}
							className="user-btn"
						>
							{connected ? (
								<span>
									{shortAddress}{' '}
									<img
										src={connectLogo}
										alt="Connect Logo"
										width="25"
										height="25"
									/>{' '}
								</span>
							) : (
								'Connect Wallet'
							)}
						</button>
					</div>
				</header>
				<div className="content-container-main">
					<Switch>
						<Route exact path="/dashboard">
							<Redirect to="/dashboard/staking" component={Staking} />
						</Route>
						<Route exact path="/">
							<Redirect to="/dashboard/staking" component={Staking} />
						</Route>
						<Route path="/dashboard/staking" exact component={Staking} />
						<Route exact path="/dashboard">
							<Redirect to="/dashboard/aiTraining" component={AITraining} />
						</Route>
						<Route path="/dashboard/aiTraining" exact component={AITraining} />
						<Route
							path="/dashboard/celebrity-nfts"
							exact
							component={Celebrity}
						/>
						<Route
							path="/dashboard/celebrity-nfts/:projId"
							exact
							component={CardDetails}
						/>
						<Route
							path="/dashboard/terms"
							exact
							component={TermsAndCondition}
						/>
						<Route path="/dashboard/privacy" exact component={PrivacyPolicy} />
					</Switch>
				</div>
				{/*<div className="footer-z-index">*/}
				{/*	<Footer />*/}
				{/*</div>*/}
			</div>
			<ConnectModal show={modalShow} onClose={() => setModalShow(false)} />
		</div>
	);
}

export default Dashboard;
