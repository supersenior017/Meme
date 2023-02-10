///////////////////////////////
// VISTA 1 -  CELEBRITY MENU //
///////////////////////////////

//- React
import React from 'react';

//- Style
import styles from './CelebrityMenu.module.css';

//- Components
// import ChristmasBanner from '../ChristmasComponents/Banners/ChristmasBanner';
import CelebrityCard from '../Cards/CelebrityCard/CelebrityCard';

const CelebrityMenu = ({ cards }) => {
	return (
		<>
			<section className={styles.Container}>
				<div className={styles.Section}>
					<h2 className={styles.Title}>AiMemes NFT Drops</h2>
					<div className={styles.CardContainer}>{cards}</div>
				</div>
			</section>
		</>
	);
};

export default CelebrityMenu;
