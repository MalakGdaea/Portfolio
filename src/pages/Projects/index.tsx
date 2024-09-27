import React from "react";
import styles from "./styles.module.css";
import Title from "../../components/Title";
import { motion } from 'framer-motion';
import { fadeIn } from "../../utils/motion";
import { projects } from "../../constants/work";
import ProjectCard from "../../components/ProjectCard";

const Projects: React.FC = () => {
    return <div className="container">
        <Title title="Projects." subTitle="MY WORK" />
        <motion.p variants={fadeIn("", "", 0.1, 1)} initial="hidden" animate="show" className={styles.description}>
            Each project showcased below includes a concise description that highlights its key features and functionality.
            I've also provided links to both the source code and a live demo, allowing you to explore the code behind the project and see it in action.
            This gives insight into my development process and the technologies I work with.</motion.p>
        <div className={styles.projectsContainer}>
            {projects.map((project, index) =>
                <ProjectCard
                    key={`project-${index}`}
                    {...project}
                    index={index} />)}
        </div>
    </div>
}

export default React.memo(Projects);