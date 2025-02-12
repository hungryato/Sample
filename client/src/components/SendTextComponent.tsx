import React, { useState } from 'react';

const SendTextComponent: React.FC = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        console.log('Text submitted:', text);
        event.preventDefault();
        const response = await fetch('http://localhost:3001/send-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
        const data = await response.text();
        setResponse(data);
    };

    return (
        <div className="App">
            <h1>Send Text to Server</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                />
                <button type="submit">Send</button>
            </form>
            {response && <p>Response from server: {response}</p>}
        </div>
    );
};

export default SendTextComponent;