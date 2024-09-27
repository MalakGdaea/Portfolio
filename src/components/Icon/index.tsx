import React, { ReactNode } from "react";
import styles from "./styles.module.css";


interface Props {
    path: string,
    alt: string,
}

const Icon: React.FC<Props> = ({ path, alt }) => {
    return <div className={styles.imgContainer}>
        <img className={styles.icon} src={path} alt={alt} />
    </div>
}

export default React.memo(Icon);
