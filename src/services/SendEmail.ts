import emailjs from 'emailjs-com';

export const sendEmail = async (form: { name: string, email: string, message: string }): Promise<boolean> => {
    return emailjs.send(
        'service_434pui5',
        'template_5phiyn3',
        form,
        'Z-m_6Hx4yIBMrnsJF',
    )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            return true;
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            return false;
        });
};