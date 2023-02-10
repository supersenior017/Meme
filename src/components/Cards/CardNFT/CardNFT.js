//- React Imports
import React from 'react';

//- Style Imports
import styles from './CardNFT.module.css';
import ImageLoader from '../../Loader/Loader';

//- Button Imports
import BuyButton from '../../Button/Button';
import ViewContract from '../../ViewContract/ViewContract';

// CARD COMPONENT
// onClick: La funcion que activa el boton BUY
// name: STRING - Nombre del NFT
// colection: STRING - Nombre de la coleccion
// price: STRING NUMBER - El Precio del NFT
// image: STRING - Url de la imagen
// video: STRING - Url del video

const CardNFT = ({
	onClick,
	name,
	colection,
	price,
	image,
	video,
	thumbnail,
	href,
}) => {
	return (
		<div className={styles.CelebrityNftCard}>
			{video !== 'undefined' && (
				<div className={styles.VideoContainer}>
					<ImageLoader image={thumbnail} quite />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={styles.ButtonPlayNFT}
						height="38px"
						viewBox="0 0 24 24"
						width="38px"
						fill="#FFFFFF"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
					</svg>
					<BuyButton text="Buy" onClick={onClick} />
				</div>
			)}

			{image !== 'undefined' && (
				<div className={styles.CelebrityNftImage}>
					<ImageLoader image={image} />
					<BuyButton text="Buy" onClick={onClick} />
				</div>
			)}

			<div className={styles.CelebrityNftDataContainer}>
				<div className={styles.CelebrityNftData}>
					<h3>{colection}</h3>
					<h2>{name}</h2>
				</div>
				<div className={styles.CelebrityNftPrice}>
					<h4>Price</h4>
					<h5>{price} BNB</h5>
				</div>
			</div>
			<ViewContract href={href} />
		</div>
	);
};

export default CardNFT;
