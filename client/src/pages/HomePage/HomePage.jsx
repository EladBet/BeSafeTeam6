import styles from './Home.module.css';
import FirstButton from '../../components/common/FirstButton/FirstButton';
import Search from '../../components/Search/Search';
import Brand from '../../components/Brand/Brand';
import { useEffect, useState } from 'react';
import { BrandContext } from '../../context/BrandContext';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [brands, setBrands] = useState();

  const url = `${import.meta.env.VITE_SERVER_API_URL}/brands/?limit=3`;
  const { data, loading, error } = useApi(url);

  useEffect(() => {
    if (data && Array.isArray(data.brands)) {
      setBrands(data.brands);
    }
  }, [data]);

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

  return (
    <div className={styles.home}>
      {loading && <h3>loading...</h3>}
      {error && <h3 style={{ color: 'red' }}>Error: {error.message}</h3>}

      <div className={styles.brandActionsPanel}>
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

      <h1 className={styles.headline}>שלושת החברות המובילות</h1>

      <Search />

      <div className={styles.brands}>
        {Array.isArray(brands) &&
          brands.map((brand, index) => (
            <BrandContext.Provider key={index} value={{ ...brand, championNumber: index + 1 }}>
              <Link to={`/brands/${brand._id}`} className={styles.moreDetails}>
                <Brand />
              </Link>{' '}
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
