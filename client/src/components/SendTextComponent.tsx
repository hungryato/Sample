/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const inputStyle = css`
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
`;

const buttonStyle = css`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

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
                    css={inputStyle}
                />
                <StyledButton type="submit">Send</StyledButton>
            </form>
            {response && <p>Response from server: {response}</p>}
        </div>
    );
};

export default SendTextComponent;