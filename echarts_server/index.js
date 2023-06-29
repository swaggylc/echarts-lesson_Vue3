const express = require("express");
const app = express();
const cors = require("cors");

// 引用路由文件
const chartOne = require("./router/one");
const chartTwo = require("./router/two");
const chartThree = require("./router/three");
const chartTour = require("./router/four");

// 处理跨域
app.use(cors());

// 使用中间件来配置路由
app.use('/one',chartOne)
app.use('/two',chartTwo)
app.use('/three',chartThree)
app.use('/four',chartTour)


app.listen(3000,()=>{
    console.log('server run @http://127.0.0.1:3000');
})




