import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/PATHS";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>InTravel</div>
            <nav className={styles.navigation}>
                <a href="#">Главная</a>
                <a href="#">О нас</a>
                <a href="#">Подбор</a>
            </nav>
            <div className={styles.login}>
                <svg width="25" height="20" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2887 16.2C38.2887 10.2438 33.3373 5.39996 27.2488 5.39996C21.1603 5.39996 16.2089 10.2438 16.2089 16.2C16.2089 22.1562 21.1603 27 27.2488 27C33.3373 27 38.2887 22.1562 38.2887 16.2ZM48.7324 53.9999H43.8086C42.2851 53.9999 41.0487 52.7903 41.0487 51.2999C41.0487 49.8095 42.2851 48.5999 43.8086 48.5999H44.9926C46.9025 48.5999 48.3129 46.718 47.5898 44.9873C44.2475 36.9845 36.3981 32.4 27.2488 32.4C18.0995 32.4 10.2501 36.9845 6.9078 44.9873C6.18469 46.718 7.59508 48.5999 9.50497 48.5999H10.689C12.2125 48.5999 13.4489 49.8095 13.4489 51.2999C13.4489 52.7903 12.2125 53.9999 10.689 53.9999H5.76516C2.3152 53.9999 -0.400609 50.9138 0.330783 47.6171C2.34004 38.5478 8.61349 31.8545 16.8768 28.817C13.1067 25.8497 10.689 21.303 10.689 16.2C10.689 6.61226 19.2007 -1.02876 29.2332 0.113337C36.503 0.939537 42.5252 6.60671 43.6154 13.6888C44.5538 19.7935 42.0008 25.3691 37.6207 28.817C45.8841 31.8545 52.1575 38.5478 54.1668 47.6171C54.8982 50.9138 52.1824 53.9999 48.7324 53.9999ZM35.5287 51.2999C35.5287 52.7903 34.2922 53.9999 32.7687 53.9999H21.7288C20.2053 53.9999 18.9689 52.7903 18.9689 51.2999C18.9689 49.8095 20.2053 48.5999 21.7288 48.5999H32.7687C34.2922 48.5999 35.5287 49.8095 35.5287 51.2999Z" fill="white"/>
                </svg>
                <Link to={LOGIN_ROUTE}>
                <div>Login</div>
                </Link>
            </div>
        </header>
    );
}

export default Header;