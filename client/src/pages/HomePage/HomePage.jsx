import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton';
import Search from '../../components/Search/Search';
import Brand from '../../components/Brand/Brand';
import { useEffect, useState } from 'react';
import { fetchAllBrands, fetchBrandById } from '../../mockBrands.model';
import { BrandContext } from '../../context/BrandContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  const handleRating = () => {
    navigate('/rate-brand');
  };
  const handleOffer = () => {
    navigate('/add-brand');
  };
  const handleAbout = () => {
    navigate('/criteria');
  };
  const handleAllBrands = () => {
    navigate('/brands');
  };

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await fetchAllBrands();
        setBrands(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    loadBrands(); // Fetch brands when the component mounts
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.brandActionsPanel}>
        <Search className={styles.search} />
        <FirstButton onClick={handleRating} disabled={false}>
          לדירוג חברות
        </FirstButton>
        <FirstButton onClick={handleOffer} disabled={false}>
          להצעת רשת לדירוג
        </FirstButton>
        <FirstButton onClick={handleAllBrands} disabled={false}>
          לכל המותגים
        </FirstButton>
      </div>

      <h1 className={styles.headline}>Top 10 Fashion Brands Promoting Positive Body Image</h1>

      <div className={styles.brands}>
        {brands.map((brand, index) => (
          <BrandContext.Provider key={index} value={brand}>
            <Brand />
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
