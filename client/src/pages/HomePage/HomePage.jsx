import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton'
import Search from '../../components/Search/Search'
import Brand from '../../components/Brand/Brand';
import { useEffect, useState } from 'react';
import data from '../../mocData.model'; // TODO: delete this when use real data
import { BrandContext } from '../../context/BrandContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState(data)

  const handleRating = () => {
    alert('Button clicked! - Rating');
  };
  const handleOffer = () => {
    alert('Button clicked! - Offer');
  };
  const handleAbout = () => {
    navigate('/about');
  };

  useEffect(()=>{
    setBrands(data); //TODO: change - update when ever the data change
  },[])

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
          <BrandContext.Provider key= {index} value={brand}>
            <Brand/>
          </BrandContext.Provider>
        ))}
      </div>
      
      <FirstButton onClick={handleAbout} disabled={false}>
        לפרטים נוספים על שיטת הדירוג שלנו
      </FirstButton>

    </div>
  );
};

export default Home;
