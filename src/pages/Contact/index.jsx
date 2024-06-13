import React, { useState, useEffect } from 'react';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`mailto:floriandenisfdpro@gmail.com?subject=Message de ${name} (${email})&body=${message}`);
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
            <div>
                <h4>Contact me</h4>
                <p>send me a mail:</p>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='input-field'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required spellCheck="false"/>
                        <label>
                            Enter your Name
                        </label>
                </div>
                <div className='input-field'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required spellCheck="false"/>
                        <label>
                            Your Email
                        </label>
                </div>
                <div className='wrapper'>
                    <h2>Your Message</h2>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required spellCheck="false" placeholder='Type something here..'/>
                </div>
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Contact;
