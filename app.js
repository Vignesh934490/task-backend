const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;

// MySQL connection
const connection = mysql.createConnection({
  host: 'YOUR-RDS-ENDPOINT',
  user: 'admin',
  password: 'yourpassword',
  database: 'yourdatabase'
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get('/', (req, res) => {
  res.send('Hello from the App Tier!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
