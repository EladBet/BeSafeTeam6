import styles from './AllCompanies.module.css';
import { fetchAllCompanies } from '../../mockCompanies.model';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import Stars from '../../components/Stars/Stars';

const AllCompanies = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['companies'],
    queryFn: fetchAllCompanies,
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
      {data.map((company) => (
        <Link className={styles.link} key={company.id} to={`/rating/${company.id}`}>
          <p>{company.name}</p>
          <Stars numStars={company.ratingOverall} />
        </Link>
      ))}
    </div>
  );
};

export default AllCompanies;
