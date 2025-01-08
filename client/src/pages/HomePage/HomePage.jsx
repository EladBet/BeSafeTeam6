import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton'
import Search from '../../components/Search/Search'

const Home = () => {
  const handleRating = () => {
    alert('Button clicked! - Rating');
  };
  const handleOffer = () => {
    alert('Button clicked! - Offer');
  };

  return (
    <div className={styles.home}>
      <div className={styles.companyActionsPanel}>
        {/* search */}
        <Search className={styles.search}/>
        <FirstButton onClick={handleRating} disabled={false}>
          לדירוג חברות
        </FirstButton>
        <FirstButton onClick={handleOffer} disabled={false}>
          להצעת רשת לדירוג
        </FirstButton>
      </div>
      
    </div>
  );
};

export default Home;
