import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import About from './pages/AboutPage/AboutPage';
import projectLogo from './assets/bodyfriendly-logo.png';
import CompanyRating from './pages/CompanyRatingPage/CompanyRatingPage';
import AddBrand from './pages/AddBrandPage/AddBrandPage';

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
            <Link to="/" className={styles.appLink}>
              <span className="material-icons">home</span>
            </Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rating/:companyID" element={<CompanyRating />} />
            <Route path="/add-brand" element={<AddBrand />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2025 My App</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
