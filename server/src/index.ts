import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-text', (req, res) => {
    const text = req.body.text;
    console.log(`Received text: ${text}`);
    res.send(`Received text: ${text}`);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});