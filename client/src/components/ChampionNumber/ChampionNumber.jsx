import styles from './ChampionNumber.module.css';
import championImage from '../../assets/champion.png';
import PropTypes from 'prop-types';

const ChampionNumber = ({ number }) => {
  return (
    <div className={styles.championcontainer}>
        <img src={championImage} alt="Champion Medal" className={styles.championimage}/>
        <span className={styles.number}>{number}</span>
    </div>
  );
};

ChampionNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default ChampionNumber;
