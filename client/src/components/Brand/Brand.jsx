import styles from './Brand.module.css'
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';
import useBrand, { BrandContext } from '../../context/BrandContext';

const Brand = () => {
    const brand = useBrand();
    
    const handleClick = () => {
        console.log("click")
        // move to more deatils - TODO: create page
    }

    return(
        <div className={styles.brand}>
            <div className={styles.modelContainer}>
                <ChampionNumber number={brand.championNumber} />
                <img src={brand.image} alt="model" className={styles.modelImage} />
                <Details className={styles.details}/>
                <span className={styles.moreDetails} onClick={handleClick}>&lt;</span>
            </div>
        </div>
    )
};

export default Brand;