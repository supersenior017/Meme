// React Import
import React from 'react';

// Styles Import
import styles from './ChristmasLogo.module.css';

// Logo Import
import ChristmasLogoHat from '../../../images/ChristmasLogo.png';

// style: CSSProperties - En la etiqueta <button> se debe poner en la propiedad Style una variable
//                          para enviarle CSS desde fuera cuando es llamado en otro componente.

const ChristmasLogo = ({ style, mobile, sidebar }) => {
	return (
		<a
			href="/"
			style={style}
			className={`${styles.Container} 
			${mobile ? styles.Mobile : ''} 
			${sidebar ? styles.SideBar : ''}`}
		>
			<img src={ChristmasLogoHat} alt="logo" className={styles.TribeLogo} />
		</a>
	);
};

export default ChristmasLogo;
