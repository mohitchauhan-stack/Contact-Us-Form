import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css';

const Form = () => {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        text: ""
    });

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
        setFormData({
            name: "",
            email: "",
            text: ""
        })
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' value={formData.name} onChange={handleInputChange}/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' value={formData.email} onChange={handleInputChange}/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">TEXT</label>
                <textarea name="text" id="text" rows={8} placeholder='Enter your text' value={formData.text} onChange={handleInputChange}></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "end"}}>
                <Button text="SUBMIT" />
            </div>
        </form>
    )
}

export default Form