import React from "react";
import styles from "./styles.module.css";
import Tilt from 'react-parallax-tilt';

interface Props {
    title: string,
    index: number,
    icon: string,
}

const ServiceCard: React.FC<Props> = ({ title, index, icon }) => {
    return <Tilt className={styles.cardContainer}>
        <div className={styles.card} >
            <div className={styles.content}>
                <img src={icon} alt={title} className={styles.icon} />
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    </Tilt>

}

export default React.memo(ServiceCard);
