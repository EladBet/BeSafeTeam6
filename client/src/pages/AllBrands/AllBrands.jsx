import styles from './AllBrands.module.css';
import { Link } from 'react-router-dom';
import Stars from '../../components/Stars/Stars';
import useApi from '../../hooks/useApi';

const AllBrands = () => {
  const url = `${import.meta.env.VITE_SERVER_API_URL}/brands`;

  const { data, loading, error } = useApi(url);

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
      <h1 lassName={styles.title}>דירוגים לפי מותג</h1>
      {data.brands.map((brand) => (
        <Link to={`/brands/${brand._id}`} className={styles.link} key={brand._id}>
          <img src={brand.logo} alt={`${brand.name} logo`} className={styles.logo} />
          <p>{brand.name}</p>
          <Stars numStars={brand.score} />
        </Link>
      ))}
    </div>
  );
};

export default AllBrands;
