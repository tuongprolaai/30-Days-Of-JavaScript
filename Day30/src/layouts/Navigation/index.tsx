import { NavLink } from "react-router";

import styles from "./Navigation.module.scss";
const navItems = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/worldcountries",
    title: "World Countries",
  },
  {
    to: "/validateform",
    title: "Validate Form",
  },
];
function Navigation() {
  return (
    <nav className={styles.menu}>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={item.to}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
