import { NavLink } from "react-router-dom";
import MenuItems from "./items";
import styles from "./styles.module.css";

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    {MenuItems.map((MenuItem) => (
                        <NavLink key={MenuItem.link} to={"/history"}>
                            <MenuItem.Icon />

                            <span>{MenuItem.label}</span>
                        </NavLink>
                    ))}
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
