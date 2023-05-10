const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config({path: './config/config.env'});

const getIp = async () => {
    const res = await axios.get('https://api.ipify.org?format=json');
    console.log(`Your IP address is ${res.data.ip}`);
}

const connectToAtlas = async () => {
    try {
        await getIp();
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectToAtlas;