import React from "react";
import styles from "./styles.module.css"
import TextTyping from "../../components/TextTyping";
import CustomButton from '../../components/Button';
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return <div className={styles.videoContainer}>
        <div className={styles.cover}></div>
        <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
            <source src={require("../../assets/space.mp4")} type="video/mp4" />
        </video>
        <div className={styles.content}>
            <h1>Hi, It's <span className={styles.yellowText}>Malak</span></h1>
            <h3>I'm a <TextTyping words={["Software Developer", "Web Developer", "Believer"]} style={styles.yellowText} /></h3>
            <p>Honors Computer Science graduate and Full Stack Developer
                skilled in MERN stack, React, JavaScript, TypeScript,
                and Node.js. Seeking to leverage my expertise in developing
                quality software solutions as a full-stack web developer.</p>
            <div className={styles.buttons}>
                <CustomButton
                    text="Contact Me"
                    handleClick={() => navigate('/contact')} />
                <a href="/Resume.docx" download="Malak_CV.docx">
                    <CustomButton
                        text="Download CV"
                        outlined={true}
                    />
                </a>
            </div>
        </div>
    </div>
}

export default React.memo(Home);