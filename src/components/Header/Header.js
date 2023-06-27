import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
        <Link to="/form">loginForm</Link>
      </nav>
    </header>
  );
};
