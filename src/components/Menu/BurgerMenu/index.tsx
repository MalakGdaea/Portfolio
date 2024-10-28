import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import styles from './styles.module.css';
import { MenuItemType } from '../../../types/MenuItem';

const BurgerMenu: React.FC<{ menuItems: MenuItemType[] }> = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgerMenuContainer}>
            <button onClick={toggleMenu} className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>
            {isOpen && (
                <div className={styles.menuItems}>
                    {menuItems.map((item: MenuItemType, index: number) =>
                        <MenuItem key={index} menuItem={item} />
                    )}
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
