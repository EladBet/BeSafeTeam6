import styles from './AllBrands.module.css';
import { Link } from 'react-router-dom';
import Stars from '../../components/Stars/Stars';
import useApi from '../../hooks/useApi';

const AllBrands = () => {
  const { data, loading, error } = useApi('http://localhost:5500/brands');

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error.message}</p>;
  }

  if (!data || !data.brands || data.brands.length === 0) {
    return <p className={styles.noData}>No brands found.</p>;
  }

  return (
    <div className={styles.links}>
      <h1>Ratings by Brand</h1>
      {data.brands.map((brand) => (
        <Link className={styles.link} key={brand._id} to={`/brands/${brand.name}`}>
          <img src={brand.logo} alt={`${brand.name} logo`} className={styles.logo} />
          <p>{brand.name}</p>
          <Stars numStars={brand.score} />
        </Link>
      ))}
    </div>
  );
};

export default AllBrands;
