const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
