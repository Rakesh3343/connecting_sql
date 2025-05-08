const express = require('express');
const db = require('mysql2');
const app = express();

// now that the express app is set up we need to create a connection from express to db
const connection=db.createConnection({
    host:'localhost',
    user:'root',
    password:'3343',
    database:'busbooking'

})

// check the connection
connection.connect((err)=>{if (err){
    console.log(err);
    return;
} 
console.log("connection is done!")})

// Interacting with the db
const userTableQuery = 'create table Users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),email VARCHAR(255))';
const busTableQuery = 'create table Buses(id INT AUTO_INCREMENT PRIMARY KEY, busNumber INT,totalSeats INT,availableSeats INT)';
const bookingTableQuery = 'create table Bookings(id INT AUTO_INCREMENT PRIMARY KEY, seatNumber INT)';
const paymentsTableQuery = 'create table Payments(id INT AUTO_INCREMENT PRIMARY KEY, amountPaid INT,paymentStatus VARCHAR(255))'
// Table creation
connection.execute(userTableQuery,(err)=>{
    if(err){
    console.log(err)
    connection.end()}
    console.log('users table is created!')
}
)
connection.execute(busTableQuery,(err)=>{
    if(err){
    console.log(err)
    connection.end()}
    console.log('Buses table is created!')
}
)
connection.execute(bookingTableQuery,(err)=>{
    if(err){
    console.log(err)
    connection.end()}
    console.log('bookings table is created!')
}
)
connection.execute(paymentsTableQuery,(err)=>{
    if(err){
    console.log(err)
    connection.end()}
    console.log('payments table is created!')
}
)


app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.listen(3000,(err)=>{
    console.log("Server is running!")
})
