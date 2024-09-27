import React from "react";
import styles from "./styles.module.css";
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from "../../utils/motion";
import { services } from "../../constants/work";
import ServiceCard from "../../components/ServiceCard";
import Title from "../../components/Title";

const About: React.FC = () => {
    return <div className="container">
        <Title title="Overview." subTitle="INTRODUCTION" />
        <motion.p
            className={styles.contentText}
            initial="hidden" animate="show"
            variants={fadeIn("", "", 0.1, 1)}>
            BSc. Computer Science graduate with honors and a Full Stack Web Developer Bootcamp graduate with proven knowledge of the entire MERN stack and beyond.
            Familiar with web architecture concepts, Skilled in React,
            JavaScript, Typescript, Redux, Node.js, MongoDB, SQL,
            and Mongoose , seeking a position as a full-stack web developer
            to use my programming abilities to develop quality software
            products fitting clients' requirements.
        </motion.p>
        <motion.div className={styles.cardsContainer} variants={slideIn("left", "", 0.3, 1.5)} initial="hidden" animate="show">
            {services.map((service, index) => (
                <ServiceCard index={index} key={service.title} {...service} />
            ))}
        </motion.div>
    </div>
}

export default React.memo(About);