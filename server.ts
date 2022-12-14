import Koa from 'koa';
import Router from 'koa-router';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3001;
// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(PORT, () => {
    console.log(`koa server listening on ${PORT}`);
  });
});
