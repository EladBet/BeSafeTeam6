import React from 'react';
import styles from './Details.module.css'

const Details = () => {
    const totalStars = 5;
    const rating = 3; // TODO: change it that this will be input
    
    return(
        <div className={styles.details}>
            <h1>שם החברה</h1>
            <h3>דירוג: 50</h3>
            <div className={styles.stars}>
                {[...Array(totalStars)].map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.star} ${index < rating ? styles.filled : styles.empty}`}
                    >
                        {index < rating ? '★' : '☆'}
                    </span>
                ))}
            </div>
        </div>
    )
};

export default Details;