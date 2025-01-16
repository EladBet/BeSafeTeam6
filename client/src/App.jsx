import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import About from './pages/AboutPage/AboutPage';
import Criteria from './pages/CriteriaPage/CriteriaPage';
import Forum from './pages/ForumPage/Forum';
import projectLogo from './assets/bodyfriendly-logo.png';
import BrandRating from './pages/BrandRatingPage/BrandRatingPage';
import AddBrand from './pages/AddBrandPage/AddBrandPage';
import AllBrands from './pages/AllBrands/AllBrands';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <Link to="/" className={styles.appLink}>
            <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          </Link>
          <h1 title="bodyfriendly" className={styles.siteTitle}>
            <span style={{ fontWeight: 700 }}>BODY</span>
            <span style={{ fontWeight: 300 }}>FRIENDLY</span>
          </h1>
          <nav className={styles.appNav}>
            <Link to="/about" className={styles.aboutUs}>
              <span className="about-us">עלינו</span>
            </Link>

            <a href="mailto:bodyfriendlypositivity@gmail.com">
              <EmailIcon sx={{ fontSize: 21 }} className={styles.emailIcon} />
            </a>

            <Link to="/" className={styles.appLink}>
              <span className="material-icons">home</span>
            </Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/criteria" element={<Criteria />} />
            <Route path="/brands" element={<AllBrands />} />
            <Route path="/brands/:brand_id" element={<BrandRating />} />
            <Route path="/rate-brand" element={<Forum />} />
            <Route path="/add-brand" element={<AddBrand />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2025 BodyFriendly</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
