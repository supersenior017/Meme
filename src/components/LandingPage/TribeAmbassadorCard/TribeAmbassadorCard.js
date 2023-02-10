import React from 'react';
import './TribeAmbassadorCard.css';
import { SiTiktok, SiTwitter } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import whenNoImage from '../../../images/whenNoBanner.png';

function TribeAmbassadorCard({ image, name }) {
    return (
        <div className="ambassador-wrapper">
            <div className="amb-img">
                <img src={image ? image : whenNoImage} alt={name} />
            </div>
            <div className="amb-name">{name ? name : 'N/A'}</div>
            <div className="amb-social-handler">
                <a href='https:www.twitter.com' rel='noreferrer' target='_blank'><SiTwitter /></a>
                <a href='https:www.twitter.com' rel='noreferrer' target='_blank'><FaInstagramSquare /></a>
                <a href='https:www.twitter.com' rel='noreferrer' target='_blank'><SiTiktok /></a>
            </div>
        </div>
    )
}

export default TribeAmbassadorCard;
