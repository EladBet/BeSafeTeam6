import React from 'react';
import styles from './Details.module.css';
import useBrand from '../../context/BrandContext';
import Stars from '../Stars/Stars';

const Details = () => {
  const brand = useBrand();

  return (
    <div className={styles.details}>
      <h2 className={styles.brandName}>{brand.name}</h2>
      <img src={brand.logo} alt="logo" className={styles.logoImage} />
      <div className={styles.stars}>
        <Stars numStars={brand.score} />
      </div>
    </div>
  );
};

export default Details;
