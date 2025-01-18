import { useState, useEffect } from 'react';
import styles from './Forum.module.css';
import useApi from '../../hooks/useApi';

const Forum = () => {
  // GET all brands
  const url = `${import.meta.env.VITE_SERVER_API_URL}/brands`;

  const { data, loading, derror } = useApi(url);

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState(derror);
  const [error, setError] = useState('');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data.brands)) {
      // save all brands names
      const filteredBrands = data.brands.map((brand) => ({ name: brand.name }));
      setBrands(filteredBrands);
    }
  }, [data]);

  const handleSubmit = async(e) => {
    e.preventDefault(); // prevent the from to reload

    if (!selectedBrand || !rating || !message) {
      setError('יש למלא את כל השדות');
      return;
    }

    const selectedBrandName = brands.find((brand) => brand.name === selectedBrand)?.name;

    const newRate = {
      brand: selectedBrandName,
      score:rating,
      text:message,
    };
    setRates([...rates, newRate]);

    //  POST the rate
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRate),
      };

      const url = `${import.meta.env.VITE_SERVER_API_URL}/ratings`;
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      if (result.rate) {
        console.log('Rate added successfully!');
      } else {
        console.error('Error adding rate');
      }
    } catch (error) {
      console.error('Error during submit', error);
    }

    setSelectedBrand('');
    setRating(null);
    setMessage('');
    setError('');
  };

  return (
    <div className={styles.forumContainer}>
      {loading && <h3>loading...</h3>}
      <h1>דירוג חברות</h1>
      {error && <div className={styles.errorText}>{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* choose brand */}
        <div className={styles.inputField}>
          <label htmlFor="brand">בחר מותג:</label>
          <select id="brand" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="">בחר מותג</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        {/* rate: */}
        <div className={styles.rating}>
          <label>דירוג:</label>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${rating >= star ? styles.selected : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* user message */}
        <div className={styles.messageInput}>
          <label htmlFor="message">הודעה:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          שלח
        </button>
      </form>

      <div className={styles.messagesList}>
        {rates.map((msg, index) => (
          <div key={index} className={styles.message}>
            <div className={styles.brandName}>{msg.brand}</div>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`${styles.star} ${msg.rating >= star ? styles.selected : ''}`}>
                  ★
                </span>
              ))}
            </div>
            <p className={styles.messageContent}>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
