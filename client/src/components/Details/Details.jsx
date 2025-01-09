import styles from './Details.module.css'
import useBrand from '../../context/BrandContext';

const Details = () => {
    const brand = useBrand();

    const totalStars = 5;
    const starsRating = Math.round(brand.rating / 10); // max rating is 50

    return(
        <div className={styles.details}>
            <h1>{brand.name}</h1>
            <h3>דירוג: {brand.rating}</h3>
            <div className={styles.stars}>
                {[...Array(totalStars)].map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.star} ${index < starsRating ? styles.filled : styles.empty}`}
                    >
                        {index < starsRating ? '★' : '☆'}
                    </span>
                ))}
            </div>
        </div>
    )
};

export default Details;