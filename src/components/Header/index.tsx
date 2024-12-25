import styles from "./styles.module.css";
import appLogo from "/icon_rounded.png";

function Header() {
    return (
        <header className={styles.header}>
            <img src={appLogo} alt="App Logo" />
            <h1>Minha Casinha</h1>
        </header>
    );
}

export default Header;
