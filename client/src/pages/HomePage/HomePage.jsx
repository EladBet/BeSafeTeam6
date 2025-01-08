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
      <h1 className={styles.headline}>Duck It</h1>
      <div className='companyActionsPanel'>
        {/* search */}
        <Search/>
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
