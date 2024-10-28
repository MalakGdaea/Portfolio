import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion"
import { Tag } from "../../types/Tag";
import { fadeIn } from "../../utils/motion";
import Tilt from 'react-parallax-tilt';
import { github } from "../../assets";

interface Props {
    index: number,
    name: string,
    description: string,
    tags: Tag[],
    image: string,
    source_code_link: string,
}

const ProjectCard: React.FC<Props> = ({ index, name, description, tags, image, source_code_link }) => {
    return <motion.div initial={"hidden"} animate={"show"} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            scale={1}
            transitionSpeed={450}
            className={styles.cardContainer}
        >
            <div className={styles.imgContainer}>
                <img src={image} alt={name} className={styles.img} />
                <div
                    className={styles.gitHub}
                    onClick={() => window.open(source_code_link, "_blank")}
                >
                    <img src={github} alt="github" />
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <span key={index} style={{ color: tag.color }}>#{tag.name}</span>
                    ))}
                </div>
            </div>
        </Tilt>
    </motion.div>
}

export default React.memo(ProjectCard);
