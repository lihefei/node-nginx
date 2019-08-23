const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./dist/index.html');
});
const hostName = require('../utils/lib/address'); //本地IP
const port = 8888; //端口
app.listen(port, hostName, () => {
    console.log(`服务运行在http://${hostName}:${port}`);
});
console.log('服务启动成功');
