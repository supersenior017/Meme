/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './SidebarNew.css';
import logo from '../../images/logo.svg';
import PancakeSwap from '../../images/pancakeswap.png';
import { NavLink } from 'react-router-dom';
import { SiReddit, SiGithub } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';

function SidebarNew(props) {
	useEffect(() => {}, []);
	return (
		<>
			<div className="sidebar-wrapper">
				<div className="Sidebar_head__1Z76C">
					<a href="https://aimemes.art/">
						<img src={logo} alt="logo" className="Sidebar_logo__3TLMd" />
					</a>
					<div className="Sidebar_wallet__eXx60">
						<button className=" Sidebar_buttonConnect__small Button_button__17x3e Sidebar_buttonConnect__3toNv Button_buttonSmall__3-WQV Button_buttonBlue__3LvNm">
							<span>Connect Wallet</span>
						</button>
					</div>
				</div>

				<nav>
					<ul className="Sidebar_items__1Hqtp">
						{/* <li className="Sidebar_item__rJc2e">
                            <NavLink className="Sidebar_link__3B0JM" to="/dashboard/celebrity-nfts" activeClassName="Sidebar_link__3B0JM_active" onClick={() => props.getToggleStatus(false)}>
                                <span className="Sidebar_icon__2uqhU">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.55 23.66">
                                        <path d="M18.82,3.05l-.89.13a12.64,12.64,0,0,0-7.19,3.59l-.58.58S7.22,6,3.24,8.53a.55.55,0,0,0,.1,1l3.42,1.24-.3.3a1,1,0,0,0,0,1.42l4.68,4.68a1,1,0,0,0,1.41,0l.31-.3,1.24,3.42a.55.55,0,0,0,1,.1c2.52-4,1.18-6.93,1.18-6.93l.58-.57a12.76,12.76,0,0,0,3.59-7.2l.13-.89A1.53,1.53,0,0,0,18.82,3.05Zm-2.71,6.5a1.46,1.46,0,0,1-2,0,1.45,1.45,0,1,1,2,0Z" />
                                        <path
                                            className="cls-1"
                                            d="M8,15.59H8a1.86,1.86,0,0,1-.62,3L3.35,20.26,5,16.21A1.86,1.86,0,0,1,8,15.59Z"
                                        />
                                    </svg>
                                </span>
                                Celebrity NFTs
                            </NavLink>
                        </li> */}
						<li className="Sidebar_item__rJc2e Sidebar_itemActive__11Rxt">
							<NavLink
								className="Sidebar_link__3B0JM"
								to="/dashboard/staking"
								activeClassName="Sidebar_link__3B0JM_active"
								onClick={() => props.getToggleStatus(false)}
							>
								<span className="Sidebar_icon__2uqhU">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
										<path d="M8.7,29c-3,1.14-4.79,2.67-4.79,4.35v4.09c0,3.54,8,6.4,17.91,6.4S39.74,41,39.74,37.43v-4a45.26,45.26,0,0,1-11.56,1.41C20.18,34.83,11.69,33,8.7,29Z" />
										<path
											className="cls-1"
											d="M44.42,19C42.13,23.6,33,25.74,24.36,25.74a41.19,41.19,0,0,1-14.1-2.23v2.24c0,3.53,8,6.4,17.92,6.4s17.91-2.87,17.91-6.4V21.66A3.55,3.55,0,0,0,44.42,19Z"
										/>
										<path
											className="cls-1"
											d="M24.36,23.06c9.9,0,17.92-2.86,17.92-6.4V12.57c0-3.54-8-6.4-17.92-6.4S6.45,9,6.45,12.57v4.09C6.45,20.2,14.47,23.06,24.36,23.06Z"
										/>
									</svg>
								</span>
								Staking
							</NavLink>
						</li>
						<li className="Sidebar_item__rJc2e Sidebar_itemActive__11Rxt">
							<NavLink
								className="Sidebar_link__3B0JM"
								to="/dashboard/aiTraining"
								activeClassName="Sidebar_link__3B0JM_active"
								onClick={() => props.getToggleStatus(false)}
							>
								<span className="Sidebar_icon__2uqhU">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
										<path d="M8.7,29c-3,1.14-4.79,2.67-4.79,4.35v4.09c0,3.54,8,6.4,17.91,6.4S39.74,41,39.74,37.43v-4a45.26,45.26,0,0,1-11.56,1.41C20.18,34.83,11.69,33,8.7,29Z" />
										<path
											className="cls-1"
											d="M44.42,19C42.13,23.6,33,25.74,24.36,25.74a41.19,41.19,0,0,1-14.1-2.23v2.24c0,3.53,8,6.4,17.92,6.4s17.91-2.87,17.91-6.4V21.66A3.55,3.55,0,0,0,44.42,19Z"
										/>
										<path
											className="cls-1"
											d="M24.36,23.06c9.9,0,17.92-2.86,17.92-6.4V12.57c0-3.54-8-6.4-17.92-6.4S6.45,9,6.45,12.57v4.09C6.45,20.2,14.47,23.06,24.36,23.06Z"
										/>
									</svg>
								</span>
								AI Training
							</NavLink>
						</li>
						<li className="Sidebar_item__rJc2e Sidebar_itemActive__11Rxt">
							<a
								className="Sidebar_link__3B0JM"
								href="https://docs.tribetoken.app/"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									props.getToggleStatus(false);
								}}
							>
								<span className="Sidebar_icon__2uqhU">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
										<path d="M8.7,29c-3,1.14-4.79,2.67-4.79,4.35v4.09c0,3.54,8,6.4,17.91,6.4S39.74,41,39.74,37.43v-4a45.26,45.26,0,0,1-11.56,1.41C20.18,34.83,11.69,33,8.7,29Z" />
										<path
											className="cls-1"
											d="M44.42,19C42.13,23.6,33,25.74,24.36,25.74a41.19,41.19,0,0,1-14.1-2.23v2.24c0,3.53,8,6.4,17.92,6.4s17.91-2.87,17.91-6.4V21.66A3.55,3.55,0,0,0,44.42,19Z"
										/>
										<path
											className="cls-1"
											d="M24.36,23.06c9.9,0,17.92-2.86,17.92-6.4V12.57c0-3.54-8-6.4-17.92-6.4S6.45,9,6.45,12.57v4.09C6.45,20.2,14.47,23.06,24.36,23.06Z"
										/>
									</svg>
								</span>
								Tutorials
							</a>
						</li>
					</ul>
				</nav>
				<div className="Sidebar_bottom__3eeR3">
					<a
						href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xc34c85a3d7a84212b6234146773f7939a931a8af"
						target="_blank"
						rel="noreferrer"
					>
						<div className="pancakse-swap">
							<div>
								<img src={PancakeSwap} alt="Pancake Swap" />
							</div>
							<div className="tribe-pancake">
								<div className="tribe-small-text">
									$AIMEME Available On
								</div>
								<div className="pancake-small-text">PancakeSwap</div>
							</div>
						</div>
					</a>
					<ul className="Sidebar_media__3EY89">
						<li>
							<a href="https://t.me/tribebsc" target="_blank" rel="noreferrer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="Sidebar_mediaIcon__2HcGh"
								>
									<g id="_1" data-name={1}>
										<path
											className="cls-1"
											d="M9.4,15v3.66a.35.35,0,0,0,.61.23l2.52-2.81,5.14,4.67a.49.49,0,0,0,.81-.26L22,4A.71.71,0,0,0,21,3.14L2.31,10.36a.48.48,0,0,0,0,.9L6.44,13a1.28,1.28,0,0,0,1.2-.1L18.88,5.62,9.81,14.09A1.28,1.28,0,0,0,9.4,15Z"
										/>
									</g>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/tribebsc"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="Sidebar_mediaIcon__2HcGh"
								>
									<g id="_1" data-name={1}>
										<path
											id="cls-1"
											d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"
										/>
									</g>
								</svg>
							</a>
						</li>

						<li>
							<a
								href="https://instagram.com/tribebsc"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillInstagram className="Sidebar_mediaIcon__2HcGh" />
							</a>
						</li>

						<li>
							<a
								href="https://reddit.com/r/tribebsc"
								target="_blank"
								rel="noreferrer"
							>
								<SiReddit className="Sidebar_mediaIcon__2HcGh" />
							</a>
						</li>
						<li>
							<a
								href="/https://github.com/aimemesart"
								target="_blank"
								rel="noreferrer"
							>
								<SiGithub className="Sidebar_mediaIcon__2HcGh" />
							</a>
						</li>
						<li>
							<a
								href="https://bscscan.com/token/0xba2f384d8d351a7165ef7b586eeeac8cf69e3165"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="Sidebar_mediaIcon__2HcGh"
								>
									<g id="_1" data-name={1}>
										<path
											className="cls-1"
											d="M5.74,17.55V10.82a.56.56,0,0,1,.56-.55H8.56a.56.56,0,0,1,.56.55v6.11l1-.24V9a.56.56,0,0,1,.55-.56h2.27a.56.56,0,0,1,.55.56v6.63c.42-.16.83-.34,1.24-.52v-8a.56.56,0,0,1,.56-.55h2.26a.56.56,0,0,1,.56.55V13.2a13.93,13.93,0,0,0,3.58-3.64A10,10,0,0,0,2,12a9.88,9.88,0,0,0,1.84,5.76C4.38,17.71,5,17.65,5.74,17.55Z"
										/>
										<path
											className="cls-1"
											d="M6.76,20.5A9.84,9.84,0,0,0,12,22,10,10,0,0,0,22,12c0-.26,0-.53,0-.78C20.52,14.32,16.72,18.49,6.76,20.5Z"
										/>
									</g>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xc34c85a3d7a84212b6234146773f7939a931a8af"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="Sidebar_mediaIcon__2HcGh"
								>
									<g id="_1" data-name={1}>
										<path
											className="cls-1"
											d="M17.61,8.77,18.27,5a2.62,2.62,0,0,0-.5-2,2.64,2.64,0,0,0-1.85-1h-.21a2.59,2.59,0,0,0-2.59,2.59V7.7c-.37,0-.75,0-1.12,0s-.79,0-1.19,0V4.56A2.6,2.6,0,0,0,8.21,2H8A2.61,2.61,0,0,0,5.65,5L6.32,8.8C3.6,10,2,12,2,14.12v1.46C2,19.2,6.39,22,12,22s10-2.83,10-6.45V14.12C22,11.93,20.37,10,17.61,8.77Zm-1.9-6h0Zm-.28,9.61c.56,0,1,.68,1,1.52s-.45,1.51-1,1.51-1-.68-1-1.51S14.87,12.33,15.43,12.33ZM8.21,2.72h0Zm.23,9.61c.56,0,1,.68,1,1.52s-.45,1.51-1,1.51-1-.68-1-1.51S7.88,12.33,8.44,12.33Zm12.81,3.25c0,3.15-4.14,5.7-9.25,5.7s-9.25-2.55-9.25-5.7V14.12h0c0,3.14,4.15,5.69,9.25,5.69s9.24-2.55,9.25-5.69h0Z"
										/>
									</g>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default SidebarNew;
