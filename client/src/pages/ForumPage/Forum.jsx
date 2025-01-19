import { useState } from 'react';
import styles from './Forum.module.css';
import useApi from '../../hooks/useApi';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const Forum = () => {
  // GET all brands
  const brandsUrl = `${import.meta.env.VITE_SERVER_API_URL}/brands`;
  const { data, loading, error: apiError } = useApi(brandsUrl);

  const [selectedBrandName, setSelectedBrandName] = useState('');
  const [rating, setRating] = useState(null); // either null or number between 1-5
  const [message, setMessage] = useState('');
  const [error, setError] = useState(apiError?.message || '');

  const selectedBrandId = data?.brands.find((brand) => brand.name === selectedBrandName)?._id;

  const queryClient = useQueryClient();
  const { data: rates } = useQuery({
    enabled: selectedBrandId != undefined,
    queryKey: ['rates', selectedBrandId],
    queryFn: async () => {
      const ratesUrl = `${import.meta.env.VITE_SERVER_API_URL}/ratings/${selectedBrandId}`;
      const response = await fetch(ratesUrl);
      return await response.json();
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the from to reload

    if (!selectedBrandName || !rating || !message) {
      setError('יש למלא את כל השדות');
      return;
    }

    const newRate = {
      brand_id: selectedBrandId,
      rating,
      message,
    };

    setError('');

    // send the new rate to the server
    try {
      const url = `${import.meta.env.VITE_SERVER_API_URL}/ratings/new`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRate),
      });

      const data = await response.json();

      if (data.error) {
        setError('Failed to submit rating: ' + data.error);
      }

      // refetch the ratings for the selected brand, to show the new rating
      queryClient.invalidateQueries(['rates', selectedBrandId]);
    } catch (error) {
      setError('Error submitting rating: ' + error.message);
    }

    setRating(null);
    setMessage('');
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
          <select id="brand" value={selectedBrandName} onChange={(e) => setSelectedBrandName(e.target.value)}>
            <option value="">בחר מותג</option>
            {data?.brands.map((brand) => (
              <option key={brand._id} value={brand.name}>
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
        {rates?.map((msg, index) => (
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
