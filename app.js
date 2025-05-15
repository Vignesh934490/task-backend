const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;

// MySQL connection
const connection = mysql.createConnection({
  host: 'task-db.c70oeywy2z4b.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Vignesh9344',
  database: 'task-db'
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
