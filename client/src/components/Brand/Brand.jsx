import styles from './Brand.module.css';
import ChampionNumber from '../ChampionNumber/ChampionNumber';
import Details from '../Details/Details';
import useBrand from '../../context/BrandContext';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

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
        <Link to={`/brands/${brand.name}`} className={styles.moreDetails}>
          <ControlPointIcon onClick={handleClick} style={{ fontSize: 40, color: 'black' }} />
        </Link>{' '}
      </div>
    </div>
  );
};

export default Brand;
