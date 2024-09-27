import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion";

interface Props {
    title: string,
    subTitle: string,
}

const Title: React.FC<Props> = ({ title, subTitle }) => {
    return <motion.div className={styles.title} variants={textVariant(0.2)} initial="hidden" animate="show">
        <p className={styles.subText}>{subTitle}</p>
        <h2 className={styles.headText}>{title}</h2>
    </motion.div>
}

export default React.memo(Title);
