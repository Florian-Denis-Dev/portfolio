import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Contact({ setShowFooter }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        setShowFooter(false);
        return () => setShowFooter(true);
    }, [setShowFooter]);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`mailto:floriandenisfdpro@gmail.com?subject=${t('contact_subject', { name, email })}&body=${message}`);
    };

    useEffect(() => {
        const textarea = document.querySelector('textarea');
        const resizeTextarea = (e) => {
            textarea.style.height = "63px";
            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        };
        textarea.addEventListener("keyup", resizeTextarea);
        return () => {
            textarea.removeEventListener("keyup", resizeTextarea);
        };
    }, []);

    return(
        <div className="contact">
            <div className='contact-title'>
                <h3>{t('contact_heading')}</h3>
                <p>{t('contact_instruction')}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input-field'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required spellCheck="false"/>
                    <label>
                        {t('contact_name_label')}
                    </label>
                </div>
                <div className='input-field'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required spellCheck="false"/>
                    <label>
                        {t('contact_email_label')}
                    </label>
                </div>
                <div className='wrapper'>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required spellCheck="false" placeholder={t('contact_message_placeholder')}/>
                </div>
                <div className='wrap'>
                    <button type="submit">
                        {t('contact_send_button')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;