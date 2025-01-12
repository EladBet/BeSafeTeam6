import styles from './Brand.module.css';
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';
import useBrand from '../../context/BrandContext';
import { Link } from 'react-router-dom';

const Brand = () => {
  const brand = useBrand();

  const handleClick = () => {
    console.log('click');
    // move to more deatils - TODO: create page
  };

  return (
    <div className={styles.brand}>
      <div className={styles.modelContainer}>
        <ChampionNumber number={brand.championNumber} />
        <img src={brand.image} alt="model" className={styles.modelImage} />
        <Details className={styles.details} />
        <Link to={`/rating/${brand.id}`} className={styles.moreDetails}>
          <span onClick={handleClick}>&lt;</span>
        </Link>{' '}
      </div>
    </div>
  );
};

export default Brand;
