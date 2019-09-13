const Koa = require('koa');
const API = require('./scraping');

const app = new Koa();

app.use(ctx => {
  ctx.body = API;
});
 
app.listen(3333);