import React from "react";
import styles from "./styles.module.css";
import { technologies } from "../../constants/work";
import BallCanvas from "../canvas/Ball";


const Tech: React.FC = () => {
    return <div
        className={styles.container}>
        {technologies.map((technology) => (
            <div key={technology.name} className={styles.ball}>
                <BallCanvas icon={technology.icon} />
            </div>
        ))}
    </div>
}

export default React.memo(Tech);
