import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { MenuItemType } from "../../../types/MenuItem";
import { useLocation } from "react-router-dom";

interface Props {
    menuItem: MenuItemType,
}

const MenuItem: React.FC<Props> = ({ menuItem }) => {
    const location = useLocation();
    const isActive = location.pathname === `${menuItem.path}`;

    useEffect(() => {
    }, [location])

    return <div className={styles.container}>
        <div className={`${styles.itemText} ${isActive ? styles.isActive : ''}`}><Link to={menuItem.path}>{menuItem.name}</Link></div>
    </div>
}

export default React.memo(MenuItem);
