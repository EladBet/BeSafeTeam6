import styles from './AddBrand.module.css'
import FirstButton from '../../components/common/FirstButton/FirstButton';
import { useState } from "react";

const AddBrand = () => {
  const [brandName, setBrandName] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className={styles.formContainer}>
      <h1>להצעת רשת חדשה לדירוג</h1>
      <h3>רוצים שנדרג את הרשת שלכם? כאן תוכלו להשאיר עליה פרטים </h3>

      <form className={styles.form}>
      
      <div className={styles.formGroup}>
        <label htmlFor="brandName" className={styles.label}>
            שם הרשת:
          </label>
        <input type="text"
               className={styles.input}
               placeholder="שם הרשת" 
               value={brandName}
               onChange={(e)=>setBrandName(e.target.value)}
        />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="link" className={styles.label}>
            לינק לאתר הרשת:
          </label>
          <input type="text" 
                name="link" 
                className={styles.input}
                placeholder="לינק לאתר הרשת" 
                value={link}
                onChange={(e)=>setLink(e.target.value)}
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
