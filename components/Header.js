import styles from "../styles/Header.module.css";
import MissionTimer from '../components/MissionTimer'

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>GROUND CONTROL</h1>
            <h2 className={styles.subtitle}>MACH 23 - RF MAGIC</h2>
            <MissionTimer />
        </div>
    );
}

export default Header;