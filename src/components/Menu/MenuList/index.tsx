import React from "react";
import styles from "./styles.module.css";
import MenuItem from "../MenuItem";
import { MenuItemType } from "../../../types/MenuItem";
import { menuItems } from "../../../constants/pagesPath";
import BurgerMenu from "../BurgerMenu";

const MenuList: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menuItems}>
                {menuItems.map((item: MenuItemType, index: number) =>
                    <MenuItem
                        key={index}
                        menuItem={item} />
                )}
            </div>
            <div className={styles.burgerMenu}>
                <BurgerMenu menuItems={menuItems} />
            </div>
        </div>
    )
}

export default React.memo(MenuList);
