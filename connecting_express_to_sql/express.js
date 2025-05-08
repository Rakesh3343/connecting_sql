// app.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',      // or your DB host
  user: 'root',
  password: '3343',
  database: 'testdb'
});

// Connecting to the db
db.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection has been created')
})

//Interacting with db
const createQuery = 'create table Students(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), email VARCHAR(20))'
db.execute(createQuery,(err)=>{
    if(err){
        console.log(err);
        db.end();
        return;
    }
    console.log('Table is created')
})


// Example route
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
