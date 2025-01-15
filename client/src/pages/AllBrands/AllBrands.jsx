import styles from './AllBrands.module.css';
import { fetchAllBrands } from '../../services/api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Stars from '../../components/Stars/Stars';

const AllBrands = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchAllBrands,
    retry: false,
  });

  if (isPending) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <p className={styles.error}>{error.message}</p>;
  }

  return (
    <div className={styles.links}>
      <h1>Ratings by Brand</h1>
      {data.map((brand) => (
        <Link className={styles.link} key={brand._id} to={`/brands/${brand.brandName}`}>
          <p>{brand.brandName}</p>
          <Stars numStars={3.5} />
        </Link>
      ))}
    </div>
  );
};

export default AllBrands;
