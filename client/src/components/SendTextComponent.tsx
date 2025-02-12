import { useState } from 'react';
import axios from 'axios';

const SendTextComponent: React.FC = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        console.log('Text submitted:', text);
        event.preventDefault();
        axios.post('http://localhost:3001/send-text', { text })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((error) => {
                console.error('Error sending text:', error);
                setResponse('Error sending text');
            });
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