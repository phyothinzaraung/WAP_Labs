const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, verifyToken } = require('./util/auth');

const app = express();
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    // Perform authentication logic...

    // Assuming authentication is successful, generate a token
    const token = generateToken({ userId: 123 });

    // Send the token as a response
    res.json({ token });
});

app.get('/protected', (req, res) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authorization.split(' ')[1];

    try {
        const payload = verifyToken(token);

        // Token is valid, perform protected operation
        // For example, fetch user data based on the payload

        res.json({ message: 'Protected endpoint accessed successfully' });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
