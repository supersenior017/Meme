//- React Imports
import React, { useState, Fragment } from 'react';

//- Components Imports
import CircularSpinner from './Circular';

//- Styles Imports
import styles from './Loader.module.css';

//- How it works
// Siempre que se llama hay que ponerle un contenedor que limite el crecimiento del componente.
// Asi lo podemos hacer reutilizable. El contenedor tiene ajustado para adaptarse siempre al 100% de su padre.

const ImageLoader = ({ image, video, quite }) => {
	const [loaded, setLoaded] = useState(false);

	////////////
	// RENDER //
	////////////

	return (
		<>
			<div className={styles.Container}>
				{!loaded && <CircularSpinner />}

				{video && (
					<video
						className={styles.Video}
						autoPlay={quite ? false : true}
						loop={quite ? false : true}
						muted
						onLoadedData={() => {
							setLoaded(true);
						}}
					>
						<source src={video} type="video/mp4" />
					</video>
				)}

				{image && (
					<img
						className={styles.Image}
						src={image}
						onLoad={() => {
							setLoaded(true);
						}}
					/>
				)}
			</div>
		</>
	);
};

//- Export
export default ImageLoader;
