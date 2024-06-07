import React, { useState } from 'react';


function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      window.open(`mailto:floriandenisfdpro@gmail.com?subject=Message de ${name} (${email})&body=${message}`);
    };
    return(
        <div className="contact">
            <div>
                <h4>Contact me</h4>
                <a href="https://www.instagram.com/florian.denis.dev/">instagram</a>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email :
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Message :
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;