import { useState, useEffect } from 'react';
import styles from './Forum.module.css'; 
import { fetchAllBrands } from '../../mockBrands.model';

const Forum = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchAllBrands().then((brandsData) => {
      setBrands(brandsData);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedBrand || !rating || !message) {
      setError('יש למלא את כל השדות');
      return;
    }

    const selectedBrandName = brands.find((brand) => brand.id === selectedBrand)?.name;

    const newMessage = {
      brand: selectedBrandName,
      rating,
      message,
    };
    setMessages([...messages, newMessage]);

    setSelectedBrand('');
    setRating(null);
    setMessage('');
    setError('');
  };

  return (
    <div className={styles.forumContainer}>
      <h1>פורום דירוג חברות</h1>
      {error && <div className={styles.errorText}>{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* שדה בחירת מותג */}
        <div className={styles.inputField}>
          <label htmlFor="brand">בחר מותג:</label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">בחר מותג</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        {/* דירוג */}
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

        {/* הודעת משתמש */}
        <div className={styles.messageInput}>
          <label htmlFor="message">הודעה:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>שלח</button>
      </form>

      <div className={styles.messagesList}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <div className={styles.brandName}>{msg.brand}</div> {/* שם המותג */}
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`${styles.star} ${msg.rating >= star ? styles.selected : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className={styles.messageContent}>{msg.message}</p> {/* תוכן ההודעה */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
