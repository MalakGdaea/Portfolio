import React, { useState } from "react";
import styles from "./styles.module.css";
import { motion } from 'framer-motion';
import EarthCanvas from "../../components/canvas/Earth";
import { slideIn } from "../../utils/motion";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import StarsCanvas from "../../components/canvas/Stars";
import { sendEmail } from "../../services/SendEmail";


const Contact: React.FC = () => {
    const [messageSended, setMessageSended] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const EMPTY_FELID_MESSAGE = "Please fill in all the fields: Name, Email, and Message.";
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleInputChange = (name: string, value: string) => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    const checkFormFields = (): boolean => {
        if (form.email === '' || form.message === '' || form.name === '') {
            return false;
        }
        return true;
    }

    const handleSubmit = async () => {
        if (!checkFormFields()) {
            alert(EMPTY_FELID_MESSAGE);
            return;
        }
        setIsLoading(true);
        const isSuccessfullySend = await sendEmail(form);
        setMessageSended(isSuccessfullySend);
        setIsLoading(false);
    }

    return <>
        <StarsCanvas />
        <div className={styles.container}>
            <div></div>
            <motion.div
                initial="hidden"
                animate="show"
                className={styles.content} variants={slideIn('left', "tween", 0.2, 1)}>
                {messageSended === null ?
                    <>
                        <p className={styles.subText}>GET IN TOUCH</p>
                        <h3 className={styles.headText}>Contact.</h3>
                        <div className={styles.inputsContainer}>
                            <span className={styles.input}>
                                <TextInput
                                    name="name"
                                    value={form.name}
                                    placeholder="What's your name?"
                                    title="Your Name"
                                    handleChange={handleInputChange} />
                            </span>
                            <span className={styles.input}>
                                <TextInput
                                    name="email"
                                    value={form.email}
                                    placeholder="What's your email?"
                                    title="Your Email"
                                    handleChange={handleInputChange} />
                            </span>
                            <span className={styles.message}>
                                <TextArea
                                    name="message"
                                    value={form.message}
                                    placeholder="What do you want to say?"
                                    title="Your Message"
                                    handleChange={handleInputChange} />
                            </span>
                            {isLoading ? <div className={styles.spinner}></div> : <Button text="Send" handleClick={handleSubmit}></Button>}
                        </div>
                    </>
                    : (messageSended === true ?
                        <>
                            <h3 className={styles.feedback}>Thank you for reaching out!</h3>
                            <p>Your message has been received, I really appreciate you taking the time to contact me, and I’ll get back to you as soon as possible. Have a great day!</p>
                        </>
                        :
                        <>
                            <h3>Something went wrong</h3>
                        </>
                    )

                }
            </motion.div>
            <motion.div
                initial="hidden"
                animate="show"
                className={styles.earth} variants={slideIn('right', "tween", 0.2, 1)}>
                <EarthCanvas />
            </motion.div>
        </div >
    </>
}

export default React.memo(Contact);