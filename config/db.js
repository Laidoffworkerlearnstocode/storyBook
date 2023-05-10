const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

async function connectAtlas() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected:');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectAtlas();

module.exports = connectAtlas;