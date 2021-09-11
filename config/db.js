require('dotenv').config();
const mongoose = require('mongoose');


async function connectDB() {
    //  Database connection

    try {

        await mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true } );
        console.log('Database connected');

    } catch(err) {
        console.log('Connection failed', err);
    }
    
}



module.exports = connectDB;