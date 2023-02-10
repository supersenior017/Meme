///////////////////////
// - VISTA GENERAL - //
///////////////////////

//- React
import React, { useState } from 'react';

//- Style
import styles from './Celebrity.module.css';

//- Views
import CelebrityMenu from '../CelebrityMenu/CelebrityMenu';
import CelebrityView from '../CelebrityView/CelebrityView';
//- Components
import CelebrityCard from '../Cards/CelebrityCard/CelebrityCard';
// import ChristmasAnimatedBackground from '../ChristmasComponents/ChristmasAnimatedBackground/ChristmasAnimatedBackground';

//-DATA
import Artists from '../../data/artist.json';

const Celebrity = () => {
	//- View Rendered
	const [view, setView] = useState(0);

	//- Selected Artist
	const [selectedArtist, setSelected] = useState({
		image: '',
		name: '',
		user: '',
		telegram: '',
		twitter: '',
		instagram: '',
		youtube: '',
		tiktok: '',
		nft: [],
	});

	//8888888888888888888888888888888888888888888888888888888//

	const cards = Artists.data.map(function (value, i, a) {
		return (
			<CelebrityCard
				name={value.name}
				user={value.user}
				image={value.image}
				banner={value.banner}
				state={value.state}
				disabled={value.state == 'live' ? false : true}
				onClick={() => {
					selectedArtist.image = value.image;
					selectedArtist.name = value.name;
					selectedArtist.user = value.user;
					selectedArtist.telegram = value.telegram;
					selectedArtist.twitter = value.twitter;
					selectedArtist.instagram = value.instagram;
					selectedArtist.youtube = value.youtube;
					selectedArtist.tiktok = value.tiktok;
					selectedArtist.nft = value.nfts;
					setView(1);
				}}
			/>
		);
	});

	//8888888888888888888888888888888888888888888888888888888//

	//////////////
	//  RENDER  //
	//////////////
	return (
		<>
			{/* <ChristmasAnimatedBackground /> */}
			{view == 0 && <CelebrityMenu cards={cards} />}
			{view == 1 && (
				<CelebrityView
					image={selectedArtist.image}
					name={selectedArtist.name}
					user={selectedArtist.user}
					telegram={selectedArtist.telegram}
					twitter={selectedArtist.twitter}
					instagram={selectedArtist.instagram}
					youtube={selectedArtist.youtube}
					tiktok={selectedArtist.tiktok}
					nft={selectedArtist.nft}
					back={() => {
						setView(0);
					}}
				/>
			)}
		</>
	);
};

export default Celebrity;
