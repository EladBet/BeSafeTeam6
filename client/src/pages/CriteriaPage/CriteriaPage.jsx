import styles from './Criteria.module.css';
import projectLogo from '../../assets/bodyfriendly-logo.png';

function CriteriaPage() {
  return (
    <div className={styles.criteriaPage}>
      <h1>איך אנחנו מדרגות?</h1>
      <h3>
        ב-"Body Friendly", אנו מאמינות כי עולם האופנה יכול להיות מנוע לשינוי חברתי חיובי.
        לכן, חברות המבקשות לקבל את חותמת האיכות שלנו נבדקות בקפדנות על פי קריטריונים ברורים,
        המשלבים ערכים של הכלה, אחריות חברתית, וקיימות סביבתית. הקריטריונים המרכזיים כוללים:
      </h3>
      <ol>
        <ul>
          <span className={styles.boldText}>מגוון מידות</span> – האם החברה מציעה בגדים במגוון רחב
          של מידות, כך שכל אדם – ללא קשר למבנה גופו – יוכל למצוא ביגוד מתאים ונגיש?
        </ul>
        <ul>
          <span className={styles.boldText}>ייצוג מגוון</span> – האם החברה מקפידה לשלב בפרסומיה
          ובקמפיינים שלה ייצוג הולם של אנשים מגזעים, מגדרים ומידות שונות, תוך קידום ערך השוויון?
        </ul>
        <ul>
          <span className={styles.boldText}>מסרים חיוביים</span> – האם החברה מקדמת באמצעות הפרסום
          שלה דימוי גוף חיובי ומעודדת תחושת ערך עצמי אצל כל אדם?
        </ul>
      </ol>
      <p>
        חברות שעומדות בקריטריונים הללו ומקבלות דירוג גבוה, זוכות לקבל את חותמת האיכות שלנו.
        חותמת זו מסמלת את מחויבותן לערכים שאנו מאמינות בהם ומאפשרת לצרכנים לבחור מותגים
        התומכים בחברה ובסביבה.
      </p>
      <img src={projectLogo} alt="Body Friendly Logo" className={styles.logo} />
    </div>
  );
}

export default CriteriaPage;
