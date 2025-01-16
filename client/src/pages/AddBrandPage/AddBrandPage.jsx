import styles from './AddBrand.module.css';
import { useState } from 'react';
// import useApi from '../../hooks/useApi';

const AddBrand = () => {
  const [brandName, setBrandName] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const url = `${import.meta.env.VITE_SERVER_API_URL}/images`;
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Error uploading image');
        }

        const data = await response.json();
        setImage(data.imageUrl);
      } catch (error) {
        console.error('Upload failed', error);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the from to reload

    const brandData = {
      brandName,
      link,
      imageUrl: image,
    };
    console.log(brandData);

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(brandData),
      };

      const url = `${import.meta.env.VITE_SERVER_API_URL}/brands`;
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      if (result.id) {
        console.log('Brand added successfully!');
      } else {
        console.error('Error adding brand');
      }
    } catch (error) {
      console.error('Error during submit', error);
    }
  };
  return (
    <div className={styles.formContainer}>
      <h1>להצעת רשת חדשה לדירוג</h1>
      <h3>רוצים שנדרג את הרשת שלכם? כאן תוכלו להשאיר עליה פרטים </h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="brandName" className={styles.label}>
            שם הרשת:
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="שם הרשת"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="link" className={styles.label}>
            לינק לאתר:
          </label>
          <input
            type="text"
            name="link"
            className={styles.input}
            placeholder="לינק לאתר הרשת"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="imageUpload" className={styles.fileInput}>
            העלאת תמונה
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.hiddenInput}
          />
        </div>

        <button type="submit" className={styles.button}>
          שלח
        </button>
      </form>

      {image && <p>תמונה שהועלתה: {image.name}</p>}
    </div>
  );
};

export default AddBrand;
