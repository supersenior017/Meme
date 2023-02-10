//Import React
import React from 'react';

//Import Styles
import styles from './Button.module.css';

// BUY BUTTON COMPONENT
// text: STRING - Texto que va en el boton.
// onClick: Function - Funcion que es llamada cuando se hace click en el boton.
// style: CSSProperties - En la etiqueta <button> se debe poner en la propiedad Style una variable
//                          para enviarle CSS desde fuera cuando es llamado en otro componente.

//STYLES COLORS
//NO PASAR ESTOS VALORES AL MISMO TIEMPO
//SOLO ELEGIR UNO
// - green: true - Boton verde.
// - grey: true - Boton con fondo gris.

const BuyButton = ({ onClick, text, style, green, grey }) => {
	return (
		<button
			className={`${styles.CelebrityNftBuy} 
            ${green ? styles.Green : styles.Gradient}
            ${grey ? styles.Grey : styles.Gradient}`}
			onClick={onClick}
			style={style}
		>
			<p>{text}</p>
		</button>
	);
};

export default BuyButton;
