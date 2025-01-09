import styles from './About.module.css';
import logo from '../../assets/full-logo.jpg'

const About = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.about}>
                <h1>אז מי אנחנו?</h1>
            </div>
            <img src={logo} alt="Logo" className={styles.logo}/>
        </div>
    )
};

export default About;