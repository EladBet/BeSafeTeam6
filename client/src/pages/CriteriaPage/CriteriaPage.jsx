import styles from './Criteria.module.css';
import projectLogo from '../../assets/bodyfriendly-logo.png';

function CriteriaPage() {
  return (
    <div className={styles.criteriaPage}>
      <h1>איך אנחנו מדרגות?</h1>
      <h3>כל חברה שמבקשת לקבל חותמת מאיתנו נבדקת על פי קריטריונים מרכזיים:</h3>
      <br />
      <br />
      <ol>
        <ul>
          <span className={styles.boldText}>מגוון מידות</span> – האם החברה מציעה בגדים במידות מגוונות ומותאמות
          לכל סוגי הגוף
        </ul>
        <ul>
          <span className={styles.boldText}>ייצוג מגוון</span> – האם החברה משתמשת בדוגמניות ודוגמנים מכל גווני
          העור, המידות, המגדרים
        </ul>
        <ul>
          <span className={styles.boldText}>מסרים חיוביים</span> – האם הפרסום והקמפיינים של החברה מקדמים דימוי
          גוף חיובי
        </ul>
      </ol>
      חברות שקיבלו דירוג גבוה יזכו לקבל מאיתנו חותמת מיוחדת ויוצגו ברשימת המותגים המומלצים שלנו
      <p />
      <img src={projectLogo} alt="Body Friendly Logo" className={styles.logo} />
    </div>
  );
}

export default CriteriaPage;
