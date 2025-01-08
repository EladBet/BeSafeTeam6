import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton'
import Search from '../../components/Search/Search'
import ChampionNumber from '../../components/ChampionNumber/ChampionNumber';

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
        <Search className={styles.search}/>
        <FirstButton onClick={handleRating} disabled={false}>
          לדירוג חברות
        </FirstButton>
        <FirstButton onClick={handleOffer} disabled={false}>
          להצעת רשת לדירוג
        </FirstButton>
      </div>

      <h1 className={styles.headline}>Top 10 Fashion Brands Promoting Positive Body Image</h1>
      
      <ChampionNumber number={1}/>
    </div>
  );
};

export default Home;
