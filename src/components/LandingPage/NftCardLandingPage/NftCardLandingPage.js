import React from 'react';
import './NftCardLandingPage.css';
import whenNoBanner from '../../../images/whenNoBanner.png';
import whenNoSmallImage from '../../../images/whenNoSmallImage.png';
import binance from '../../../images/bscAvatar.4144c399.png'

function NftCardLandingPage({ launchBanner, launchIcon, title, subTitle, status }) {
    return (
        <div>
            <div className="nft-card mt-3 nft-card-disable">
                <div className="card-label-container">
                    <div className="nft-card-1st-div">
                        <img src={`${launchBanner ? launchBanner : whenNoBanner}`} alt="Launch Banner" />
                    </div>
                    <div className={`status-label-img ${status ? 'label-bg-color-green' : 'label-bg-color-black'}`}>
                        <span></span>
                        <span>{status ? 'Completed' : 'coming soon'}</span>
                    </div>
                </div>

                <div className="second-third-div-background p-2">
                    <div className="nft-card-2nd-div">
                        <div className="img-txt">
                            <div>
                                <img src={`${launchIcon ? launchIcon : whenNoSmallImage}`} alt="Launch Logo" width="60" height="60" />
                                <span className="small-2nd-div-img">
                                    <img src={binance} alt="Binance" width="20" height="20" />
                                </span>
                            </div>
                            <div className="only-text-nft mt-2">
                                <div>{title ? title : 'New project'}</div>
                                <span>{subTitle ? subTitle : 'Coming Soon'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftCardLandingPage
