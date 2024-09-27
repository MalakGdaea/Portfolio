import React from "react";
import styles from "./styles.module.css";

interface Props {
    name: string,
    title: string,
    value: string,
    placeholder: string,
    handleChange?: (name: string, value: string) => void,
}

const TextArea: React.FC<Props> = ({
    name, title, value, placeholder, handleChange = () => { }
}) => {

    return (
        <div className={styles.container}>
            <label className={styles.label}>{title}</label>
            <textarea
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(name, e.target.value)}
            ></textarea>
        </div>
    );
};

export default React.memo(TextArea);
