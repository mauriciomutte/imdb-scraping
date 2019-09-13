const Koa = require('koa');
const cors = require('kcors');

const API = require('./scraping');

const app = new Koa();

app.use(cors());

app.use(ctx => {
  ctx.body = API;
});
 
app.listen(3333);