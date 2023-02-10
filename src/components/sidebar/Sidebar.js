/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Sidebar.css';
import logo from '../../images/logo.svg';
import PancakeSwap from '../../images/pancakeswap.png';
import { NavLink } from 'react-router-dom';
import { SiReddit, SiGithub } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';
// import ChristmasLogo from '../ChristmasComponents/Logo/ChristmasLogo';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet } from '../../store/reducer/web3_reducer';
import ConnectModal from '../../components/Modal';
import logo2 from '../../images/aitraining.png';
import logo4 from '../../images/training_white.svg';
import staking from '../../images/staking.svg';
import addImage from '../../images/ads-image.png';

function Sidebar(props) {
	const [modalShow, setModalShow] = useState(false);
	const dispatch = useDispatch();
	const { connected } = useSelector((state) => state.web3);
	const [tab, setTab] = useState(null);

	useEffect(() => {
	}, []);
	return (
		<>
			<div className='sidebar-wrapper'>
				<div className='Sidebar_head__1Z76C'>
					{
						<a href='https://aimemes.art/'>
							<img src={logo} alt='logo' className='Sidebar_logo__3TLMd' />
						</a>
					}

					<div className='Sidebar_wallet__eXx60'>
						<button
							style={{ backgroundColor: '#CE3D3D' }}
							className=' Sidebar_buttonConnect__small Button_button__17x3e Sidebar_buttonConnect__3toNv Button_buttonSmall__3-WQV Button_buttonBlue__3LvNm'
							onClick={
								connected
									? () => {
										setModalShow(true);
									}
									: () => {
										dispatch(connectWallet());
									}
							}
						>
							<span>Connect Wallet</span>
						</button>
					</div>
					<ConnectModal show={modalShow} onClose={() => setModalShow(false)} />
				</div>
				<div className='sidebar-content'>
					<nav>
						<div className='Sidebar_items__1Hqtp'>
							<div className='Sidebar_item__rJc2e Sidebar_itemActive__11Rxt'>
								<NavLink
									className='Sidebar_link__3B0JM'
									to='/dashboard/staking'
									activeClassName='Sidebar_link__3B0JM_active'
									onClick={() => props.getToggleStatus(false)}
								>
									<div className='img-white-logo'>
										<div>
											<img src="./assets/images/staking.png" />
										</div>
										<div>
											<p>Staking</p>
										</div>
									</div>
								</NavLink>
							</div>
							<div className='Sidebar_item__rJc2e Sidebar_itemActive__11Rxt'>
								<NavLink
									className='Sidebar_link__3B0JM'
									to='/dashboard/aiTraining'
									activeClassName='Sidebar_link__3B0JM_active'
									onClick={() => {
										props.getToggleStatus(false);
										setTab('training');
									}}
								>
									<div className='img-white-logo'>
										<div><img src="./assets/images/ai.png" /></div>
										<div><p>AI Training</p></div>
									</div>
								</NavLink>
							</div>

							<div className='Sidebar_item__rJc2e Sidebar_itemActive__11Rxt'>
								<a
									className='Sidebar_link__3B0JM'
									href="javascript:void(0);"
									rel='noreferrer'
									onClick={() => {
										props.getToggleStatus(false);
									}}
								>
									<div className='img-white-logo'>
										<div><img src="./assets/images/game.png" /></div>
										<div><p>AIGame</p></div>
									</div>
								</a>
							</div>
							<div className='Sidebar_item__rJc2e Sidebar_itemActive__11Rxt'>
								<a
									className='Sidebar_link__3B0JM'
									href='https://docs.aimemes.art/'
									target='_blank'
									rel='noreferrer'
									onClick={() => {
										props.getToggleStatus(false);
									}}
								>
									<div className='img-white-logo'>
										<div><img src="./assets/images/doc.png" /></div>
										<div><p>Docs</p></div>
									</div>
								</a>
							</div>
						</div>
					</nav>
					<div className='Sidebar_bottom__3eeR3'>
						<div className='social-grp'>
							<a href='t.me/AiMemesArt' target='_blank' rel='noreferrer'>
								<div>
									<img src="./assets/images/telegram.png" />
								</div>
							</a>
							<a href='https://twitter.com/AiMemes_art' target='_blank' rel='noreferrer'>
								<div>
									<img src="./assets/images/twitter.png" />
								</div>
							</a>
							<a href='https://bscscan.com/' target='_blank' rel='noreferrer'>
								<div>
									<img src="./assets/images/bscscan.png" />
								</div>
							</a>
							<a href='https://pancakeswap.finance/swap' target='_blank' rel='noreferrer'>
								<div>
									<img src="./assets/images/pancake.png" />
								</div>
							</a>
						</div>
						<div className='guides'>
	
							<a href='mailto:Info@AiMemes.art' target='_blank' rel='noreferrer'>
								<div>
									Contact
								</div>
							</a>
							<a href='https://docs.aimemes.art/' target='_blank' rel='noreferrer'>
								<div>
									Whitepaper
								</div>
							</a>
							<a href='' target='_blank' rel='noreferrer'>
								<div>
									$AIMEME Token
								</div>
							</a>
						</div>
						{/* <ul className='Sidebar_info_menu'>
						<li><a href='mailto:info@AiMemes.art'>Contact</a></li>
						<li><a href='https://docs.aimemes.art' target='_blank'>Whitepaper</a></li>
					</ul>
					<a
						className='add-image-atag'
						href='https://pancakeswap.finance/swap?outputCurrency='
						target='_blank'
						rel='noreferrer'
					>
						<img src={addImage} alt='logo' className='add-image' />
					</a>
					<ul className='Sidebar_media__3EY89'>
						<li>
							<a href='https://t.me/aiMemesArt' target='_blank' rel='noreferrer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									className='Sidebar_mediaIcon__2HcGh'
								>
									<g id='_1' data-name={1}>
										<path
											className='cls-1'
											d='M9.4,15v3.66a.35.35,0,0,0,.61.23l2.52-2.81,5.14,4.67a.49.49,0,0,0,.81-.26L22,4A.71.71,0,0,0,21,3.14L2.31,10.36a.48.48,0,0,0,0,.9L6.44,13a1.28,1.28,0,0,0,1.2-.1L18.88,5.62,9.81,14.09A1.28,1.28,0,0,0,9.4,15Z'
										/>
									</g>
								</svg>
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/AiMemes_art'
								target='_blank'
								rel='noreferrer'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									className='Sidebar_mediaIcon__2HcGh'
								>
									<g id='_1' data-name={1}>
										<path
											id='cls-1'
											d='M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z'
										/>
									</g>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/AiMemesArt"
								target="_blank"
								rel="noreferrer"
							>
								<SiGithub className="Sidebar_mediaIcon__2HcGh" />
							</a>
						</li>
						<li>
							<a
								href="https://medium.com/@aimemes.art"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="Sidebar_mediaIcon__2HcGh"
								>
									<g id="_1" data-name={1}>
										<path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
									</g>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://bscscan.com/token/"
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
								href="https://pancakeswap.finance/swap?outputCurrency="
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
					</ul> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
