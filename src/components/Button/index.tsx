import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion"

interface Props {
    text: string,
    outlined?: boolean,
    children?: ReactNode,
    handleClick?: () => void,
}

const CustomButton: React.FC<Props> = ({ text, outlined = false, children, handleClick }) => {
    return <motion.span
        onClick={handleClick}
        whileTap={{ scale: 0.8 }}
        className={outlined ? styles.outlinedContainer : styles.normalContainer}>
        {text}
        {children}
    </motion.span>
}

export default React.memo(CustomButton);
