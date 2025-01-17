import styles from './Brand.module.css';
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';
import useBrand from '../../context/BrandContext';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Brand = () => {
  const brand = useBrand();

  return (
    <div className={styles.brand}>
      <div className={styles.modelContainer}>
        <ChampionNumber number={brand.championNumber} />
        <img src={brand.image} alt="model" className={styles.modelImage} />
        <Details className={styles.details} />
        {/* <Stars brand={brand} className={styles.stars} /> */}
        <Link to={`/brands/${brand.id}`} className={styles.moreDetails}>
          <ControlPointIcon style={{ fontSize: 40, color: 'black' }} />
        </Link>{' '}
      </div>
    </div>
  );
};

export default Brand;
