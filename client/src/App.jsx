import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import About from './pages/AboutPage/AboutPage';
import projectLogo from './assets/bodyfriendly-logo.png';
import Rating from './pages/RatingPage/RatingPage';
import AddBrand from './pages/AddBrandPage/AddBrandPage';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          <h1 title="bodyfriendly">BODYFRIENDLY</h1>
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>
              Home
            </Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rating/:companyID" element={<Rating />} />
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
