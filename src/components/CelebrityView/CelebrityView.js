//- React Imports
import React, { useState, useEffect, useMemo } from 'react';

//- Style Imports
import './CelebrityView.css';

//- Components Imports
import { initializeNFTInfo } from '../../store/reducer/purchaseNFT_reducer/indexNFT';
import CardNFT from '../Cards/CardNFT/CardNFT';
import BuyModal from '../BuyModal/BuyModal';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import ChristmasAnimatedBackground from '../ChristmasComponents/ChristmasAnimatedBackground/ChristmasAnimatedBackground';
import { nftIds } from '../../store/reducer/purchaseNFT_reducer/purchaseNFTInitialStates';
import { useDispatch, useSelector } from 'react-redux';
import CelebrityCard from '../Cards/CelebrityCard/CelebrityCard';
import { loadNFTInfo } from '../../store/reducer/purchaseNFT_reducer/indexNFT';

import ChristmasBanner from '../ChristmasComponents/Banners/ChristmasBanner';
import ImageLoader from '../Loader/Loader';

const CelebrityView = ({
	name,
	image,
	user,
	telegram,
	twitter,
	instagram,
	youtube,
	tiktok,
	nft,
	back,
}) => {
	//8888888888888888888888888888888888888888888888888888888//

	//- DATOS DEL ARTISTA
	const artist = {
		//Imagen del Artista
		image: image,
		//Nombre del Artista
		name: name,
		//Usuario del Artista
		user: user,
		//URL redes sociales
		telegram: telegram,
		twitter: twitter,
		instagram: instagram,
		youtube: youtube,
		tiktok: tiktok,
	};

	//8888888888888888888888888888888888888888888888888888888//

	//- DATOS DE NFTS
	//- IMAGE / VIDEO setear como 'UNDEFINED' si no va contenido
	const nfts = nft;

	//8888888888888888888888888888888888888888888888888888888//

	//- Variable que define si el Modal de Purchase se muestra o no.
	const [modal, showModal] = useState(false);

	//- Variable que define cual NFT se muestra en el modal de Purchase.
	const [selectedArtist, selectArtist] = useState({
		name: 'name',
		colection: 'colection',
		price: 'price',
		image: '',
		video: '',
		connected: false,
		address: 'address',
		poolNumber: 0,
		cutoffDate: '1652983200',
	});

	const interval = setInterval(() => {
		if (connected) {
			for (let i = 0; i < nftIds.length; ++i) {
				dispatch(loadNFTInfo(nftIds[i]));
			}
		}
		return () => {
			clearInterval(interval);
		};
	}, 10000);

	const { connected } = useSelector((state) => state.web3);
	const dispatch = useDispatch();

	//8888888888888888888888888888888888888888888888888888888//

	const cards = nft.map(function (value, i) {
		return (
			<CardNFT
				//Nombre del NFT
				name={value.name}
				//Nombre coleccion
				colection={value.colection}
				//URL de la imagen
				image={value.image}
				//Preview del VIDEO
				thumbnail={value.thumbnail}
				//URL del video
				video={value.video}
				//Precio
				price={value.price}
				// La funcion que activa el boton BUY
				onClick={() => {
					selectedArtist.name = value.name;
					selectedArtist.colection = value.colection;
					selectedArtist.image = value.image;
					selectedArtist.video = value.video;
					selectedArtist.price = value.price;
					selectedArtist.address = value.address;
					selectedArtist.connected = connected;
					selectedArtist.poolNumber = i;
					selectedArtist.cutoffDate = value.cutoffDate;

					showModal(true);
				}}
				href={value.viewcontract}
			/>
		);
	});

	//////////////
	//  RENDER  //
	//////////////

	return (
		<>
			{/* BUY MODAL */}
			{modal && (
				<BuyModal
					artist={artist.name}
					user={artist.user}
					name={selectedArtist.name}
					colection={selectedArtist.colection}
					price={selectedArtist.price}
					image={selectedArtist.image}
					video={selectedArtist.video}
					address={selectedArtist.address}
					connected={connected}
					nftId={nftIds[selectedArtist.poolNumber]}
					onClose={() => {
						showModal(false);
					}}
					onClick={() => {}}
					cutoffDate={selectedArtist.cutoffDate}
				/>
			)}

			{/******************************/}

			<section className="celebrity-container">
				<div className="celebrity-story">
					<button
						onClick={() => {
							back();
						}}
					>
						Mint your NFTs
					</button>
					{/* <p style={{ color: '#868686' }}>Celebrity NFTs</p> */}
					<p>&gt;</p>
					<p>{artist.name}</p>
				</div>

				<div className="celebrity-artist-data">
					<div className="celebrity-artist-info-container">
						<div className="celebrity-image">
							<ImageLoader image={artist.image} />
						</div>
						<div className="celebrity-name">
							<h2>{artist.name}</h2>
							<h3>{artist.user}</h3>
							<div>
								{artist.twitter && (
									<a
										href={artist.twitter}
										className="celebrity-social social-twitter"
									>
										Twitter
									</a>
								)}

								{artist.telegram && (
									<a
										href={artist.telegram}
										className="celebrity-social social-telegram"
									>
										Telegram
									</a>
								)}
							</div>
						</div>
					</div>

					<div id="card-container" className="celebrity-nft-container">
						{cards}
					</div>
				</div>
			</section>
		</>
	);
};

export default CelebrityView;
