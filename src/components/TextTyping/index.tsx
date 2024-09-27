import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion"

interface Props {
    words: string[], // List of words to cycle through
    style: string, // CSS class for styling
    typingSpeed?: number, // Typing speed in milliseconds
    deletingSpeed?: number, // Deleting speed in milliseconds
    delayBetweenWords?: number
}

const TextTyping: React.FC<Props> = ({
    words,
    style,
    typingSpeed = 200,
    deletingSpeed = 100,
    delayBetweenWords = 2000
}) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    function type() {
        // Current word
        const currentWord = words[wordIndex];
        // Determine the function to be performed
        const shouldDelete = isDeleting ? 1 : -1;
        // Create the new text
        setText(current => currentWord.substring(0, current.length - shouldDelete));
        // Determine if this word is complete
        if (!isDeleting && text === currentWord) {
            // Make a pause at the end
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            // Move to the next word
            setWordIndex((current) => (current + 1) % words.length);
        }
    }

    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [wordIndex, isDeleting, text]);

    return (
        <>
            <motion.span className={style}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {text}
            </motion.span>
            <span className={styles.blinkingBar}></span>
        </>
    );
};

export default React.memo(TextTyping);
