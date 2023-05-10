const express = require('express');
const dotenv = require('dotenv')
const connectAtlas = require('./config/db');

const app = express();
dotenv.config({'path': './config/config.env'})
connectAtlas();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
