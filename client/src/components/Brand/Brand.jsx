import React from 'react';
import styles from './Brand.module.css'
import modelImage from '../../assets/model.jpeg';
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';

const Brand = () => {
    const handleClick = () => {
        console.log("click")
        // move to more deatils - TODO: create page
    }

    return(
        <div className={styles.brand}>
            <div className={styles.modelContainer}>
                <ChampionNumber number={1} />
                <img src={modelImage} alt="model" className={styles.modelImage} />
                <Details className={styles.details}/>
                <span className={styles.moreDetails} onClick={handleClick}>&lt;</span>
            </div>
        </div>
    )
};

export default Brand;