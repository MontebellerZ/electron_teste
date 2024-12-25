import styles from "./styles.module.css";
import Header from "../Header";
import Menu from "../Menu";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Header />

            <Menu />
        </aside>
    );
}

export default Sidebar;
