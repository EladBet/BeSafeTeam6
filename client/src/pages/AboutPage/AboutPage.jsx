import styles from './About.module.css';
import logo from '../../assets/full-logo.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>?אז מי אנחנו</h1>
        <p>
          .האתר שלנו נוצר מתוך רצון לעודד ייצוג חיובי ומגוון של גופים בעולם האופנה
          <br />
          .אנחנו מאמינות בכך שלכל גוף, בכל גודל וצבע, מגיע לקבל מקום בעולם הזה
          <br />
          ,באמצעות האתר, אנחנו בודקות ומדרגות חברות אופנה על פי קריטריונים ברורים כמו מגוון מידות, <br />
          .ייצוג של דוגמניות מכל הסוגים, ונכונות לקדם דימוי גוף בריא
          <br />
          ,המטרה שלנו היא להעלות מודעות
          <br />
          .לשפר את הסטנדרטים בעולם האופנה ולתמוך בחברות שמתחייבות לגיוון אמיתי
          <br />
        </p>
      </div>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default About;
