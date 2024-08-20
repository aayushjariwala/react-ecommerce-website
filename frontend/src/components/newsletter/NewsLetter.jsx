import React, { useState } from "react";
import './NewsLetter.css';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(result.message);
                setEmail(''); // Clear the input field
            } else {
                setMessage(result.error);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="newsletter">
            <h1>Get Exclusive offers on your email</h1>
            <p>Subscribe to our NewsLetter and stay updated</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        placeholder="Your Email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="btn2" type="submit">Subscribe</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NewsLetter;
