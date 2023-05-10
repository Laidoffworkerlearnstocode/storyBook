const express = require('express');
const dotenv = require('dotenv')
const connectToAtlas = require('./config/db');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const app = express();
const path = require('path');

// 设置静态文件夹
app.set('views', path.join(__dirname, 'views'));
// 设置morgan日志
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// 设置handlebars模板引擎
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// 托管静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', indexRouter);

dotenv.config({'path': './config/config.env'})

connectToAtlas();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
