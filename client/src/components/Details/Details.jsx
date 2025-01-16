import React from 'react';
import styles from './Details.module.css';
import useBrand from '../../context/BrandContext';
import Stars from '../Stars/Stars';

const Details = () => {
  const brand = useBrand();

  //   const totalStars = 5;
  //   // const starsRating = Math.round(brand.rating / 10); // max rating is 50
  // Calculate the average rating from ratingByCategory
  const totalRating = brand.ratingByCategory.reduce((sum, category) => sum + category.rating, 0);
  const averageRating = totalRating / brand.ratingByCategory.length;
  const starsRating = Math.max(0, Math.min(5, averageRating));
  const starsRatingRound = Math.round(averageRating * 2) / 2;

  return (
    <div className={styles.details}>
      <h1>{brand.name}</h1>
      <h3>דירוג: {starsRatingRound}</h3>

      <Stars numStars={starsRating} className={styles.stars} />

      {/* <div className={styles.stars}>
                {[...Array(totalStars)].map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.star} ${index < starsRating ? styles.filled : styles.empty}`}
                    >
                        {index < starsRating ? '★' : '☆'}
                    </span>
                ))} */}
      {/* </div> */}
    </div>
  );
};

export default Details;
