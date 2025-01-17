import styles from './Brand.module.css';
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';
import useBrand from '../../context/BrandContext';

const Brand = () => {
  const brand = useBrand();

  return (
    <div className={styles.brand}>
      <div className={styles.modelContainer}>
        <ChampionNumber number={brand.championNumber} />
        <img src={brand.image} alt="model" className={styles.modelImage} />
        <Details className={styles.details} />
      </div>
    </div>
  );
};

export default Brand;
