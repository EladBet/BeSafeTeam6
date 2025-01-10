import styles from './CompanyRating.module.css';
import { useParams } from 'react-router-dom';
import { fetchCompanyById } from '../../mockCompanies.model';
import { useQuery } from '@tanstack/react-query';
import Stars from '../../components/Stars/Stars';

const CompanyRatingPage = () => {
  const { companyID } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ['companies', companyID],
    queryFn: () => fetchCompanyById(companyID),
    retry: false,
  });

  if (isPending) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <p className={styles.error}>{error.message}</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bannerImage}>
        <img src="/images/model.png" />
      </div>
      <div className={styles.pageContent}>
        <h1>{data.name}</h1>

        <h2 className={styles.ratingOverallText}>Rating Overall: {data.ratingOverall}</h2>
        <Stars numStars={data.ratingOverall} className={styles.ratingOverallStars} />

        <div className={styles.table}>
          <div className={styles.tableHeader}>Criterion</div>
          <div className={styles.tableHeader}>Details</div>
          <div className={styles.tableHeader}>Rating</div>
          {data.ratingByCategory.map((obj) => (
            <div key={obj.category} className={styles.tableRow}>
              <div className={styles.tableCell}>{obj.category}</div>
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

export default CompanyRatingPage;
