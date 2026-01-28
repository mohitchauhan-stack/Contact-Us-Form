import Button from '../Button/Button';
import Form from '../Form/Form';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    
    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.contact_form}`}>
                <div className={`${styles.top_btn}`}>
                    <Button text="VIA SUPPORT CHAT"/>
                    <Button text="VIA CALL"/>
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM"/>
                <Form />
            </div>
            <div className={`${styles.contact_image}`}>
                <img src="/images/contact.svg" alt="contact_img" id='contact__image'/>
            </div>
        </section>
    ) 
}

export default ContactForm