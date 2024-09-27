import React from "react";
import styles from "./styles.module.css";
import MenuItem from "../MenuItem";
import { MenuItemType } from "../../../types/MenuItem";
import { menuItems } from "../../../constants/pagesPath";

const MenuList: React.FC = () => {

    return <div className={styles.container}>
        {menuItems.map((item: MenuItemType, index: number) =>
            <MenuItem
                key={index}
                menuItem={item} />
        )}
    </div>
}

export default React.memo(MenuList);
