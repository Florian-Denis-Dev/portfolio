import React, { useState, useEffect } from 'react';

function Contact({ setShowFooter }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setShowFooter(false);
        return () => setShowFooter(true);
    }, [setShowFooter]);

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
                <h3>Contact</h3>
                <p>You can send me a mail here</p>
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
                    <h2>Message:</h2>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required spellCheck="false" placeholder='Type something here..'/>
                </div>
                <div className='wrap'>
                    <button type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;