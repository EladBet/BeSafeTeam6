import React from 'react';
import styles from './Brand.module.css'
import modelImage from '../../assets/model.jpeg';
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';

const Brand = () => {
    return(
        <div className={styles.brand}>
            <div className={styles.modelContainer}>
                <ChampionNumber number={1} />
                <img src={modelImage} alt="model" className={styles.modelImage} />
                <Details className={styles.details}/>
            </div>
        </div>
    )
};

export default Brand;