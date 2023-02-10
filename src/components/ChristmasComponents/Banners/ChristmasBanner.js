// Import React
import React from 'react';

// Import src
import threeCharacters from '../../../images/three_characters.png';

// Import styles
import styles from './ChristmasBanner.module.css';

// Title: H2 - STRING - Texto para el titulo del banner.
// Text - STRING - Texto que contiene el banner.
// Characters: - BOOLEAN - Valor booleano para decidir si aparecen los personajes en el banner o no.
// style: CSSProperties - En la etiqueta <button> se debe poner en la propiedad Style una variable
//                          para enviarle CSS desde fuera cuando es llamado en otro componente.

const ChristmasBanner = ({ title, text, text2, characters }) => {
	return (
		<div className={styles.Container}>
			<div className={styles.Fondo}></div>
			<div className={styles.Content}>
				<div>
					<h2>{title}</h2>
					<br/>
					<p>{text}</p>
					<br/>
					{text2 && <p>{text2}</p>}
				</div>
				{characters && (
					<div className="banner-img">
						<img src={threeCharacters} alt=" Three Characters" />
					</div>
				)}
			</div>
		</div>
	);
};

export default ChristmasBanner;
