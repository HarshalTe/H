import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailSender = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.error('FAILED...', err);
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
            <button type="submit">Send Email</button>
        </form>
    );
};

export default EmailSender;
