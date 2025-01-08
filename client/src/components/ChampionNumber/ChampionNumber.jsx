import React from 'react';
import styles from './ChampionNumber.module.css';
import championImage from '../../assets/champion.png';

const ChampionNumber = ({ number }) => {
  return (
    <div className={styles.championcontainer}>
        <img src={championImage} alt="Champion Medal" className={styles.championimage}/>
        <span className={styles.number}>{number}</span>
    </div>
  );
};

export default ChampionNumber;
