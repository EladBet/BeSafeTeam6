import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton';
import Search from '../../components/Search/Search';
import Brand from '../../components/Brand/Brand';
import { useEffect, useState } from 'react';
import { BrandContext } from '../../context/BrandContext';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const Home = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useApi(`${import.meta.env.VITE_SERVER_API_URL}/images`);
  const [brands, setBrands] = useState(data);

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
    if (data && Array.isArray(data.brands)) {
      setBrands(data.brands);
    }
  }, [data]);

  return (
    <div className={styles.home}>
      {loading && <h3>loading...</h3>}
      {error && <h3 style={{ color: 'red' }}>Error: {error.message}</h3>}

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
        {Array.isArray(brands) &&
          brands.map((brand, index) => (
            <BrandContext.Provider key={index} value={{ ...brand, championNumber: index + 1 }}>
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
