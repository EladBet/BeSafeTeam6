import styles from './BrandRating.module.css';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Stars from '../../components/Stars/Stars';

const BrandRatingPage = () => {
  const { brand } = useParams();
  const url = `${import.meta.env.VITE_SERVER_API_URL}/brands`;

  const { data, loading, error } = useApi(`url${brand}`);

  if (error) {
    return <p className={styles.error}>{error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bannerImage}>
        <img src={data.brand.image} alt="Brand Model" />
      </div>
      <div className={styles.pageContent}>
        {/* <h1>{data.brand.name}</h1> */}
        <img src={data.brand.logo} alt="Brand Logo" />
        <h2 className={styles.ratingOverallText}>Rating Overall: {data.brand.overall_rating}</h2>
        <Stars numStars={data.brand.overall_rating} className={styles.ratingOverallStars} />

        <div className={styles.table}>
          <div className={styles.tableHeader}>Criterion</div>
          <div className={styles.tableHeader}>Details</div>
          <div className={styles.tableHeader}>Rating</div>
          {data.brand.score.map((obj) => (
            <div key={obj.criterion} className={styles.tableRow}>
              <div className={styles.tableCell}>{obj.criterion}</div>
              <div className={styles.tableCell}>{obj.details}</div>
              <div className={styles.tableCell}>
                <Stars numStars={obj.rating} style={{ color: '#000000A0' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandRatingPage;
