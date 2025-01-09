import styles from './Details.module.css'
import useBrand, { BrandContext } from '../../context/BrandContext';

const Details = () => {
    const brand = useBrand();

    const totalStars = 5;
    const rating = 3; // TODO: change it that this will be input
    
    return(
        <div className={styles.details}>
            <h1>{brand.name}</h1>
            <h3>דירוג: {brand.rating}</h3>
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