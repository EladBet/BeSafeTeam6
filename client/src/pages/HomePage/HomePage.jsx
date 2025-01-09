import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton'
import Search from '../../components/Search/Search'
import Brand from '../../components/Brand/Brand';
import { useState } from 'react';
import data from '../../mocData.model'; // TODO: delete this when use real data
import { BrandContext } from '../../context/BrandContext';

const Home = () => {
  const [brands, setBrands] = useState(data)

  const handleRating = () => {
    alert('Button clicked! - Rating');
  };
  const handleOffer = () => {
    alert('Button clicked! - Offer');
  };
  const handleMoreDeatils = () => {
    alert('Button clicked! - MoreDeatils');
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
      
      <div className={styles.brands}>
        {brands.map((brand,index)=>(
          <BrandContext.Provider value={brand}>
            <Brand/>
          </BrandContext.Provider>
        ))}
      </div>
      
      <FirstButton onClick={handleMoreDeatils} disabled={false}>
        לפרטים נוספים על שיטת הדירוג שלנו
      </FirstButton>

    </div>
  );
};

export default Home;
