const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    const url = ctx.url;
    const request = ctx.request;
    const query = request.query; //或者可以直接用ctx.query
    const querystring = request.querystring; //或者可以直接用ctx.querystring
    ctx.body = {
        url,
        request,
        query,
        querystring
    };
});
const hostName = require('../utils/lib/address'); //本地IP
const port = 9999; //端口
app.listen(port, hostName, () => {
    console.log(`服务运行在http://${hostName}:${port}`);
});
console.log('服务启动成功');
