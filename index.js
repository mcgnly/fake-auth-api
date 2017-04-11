'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const mount = require('koa-mount');
const fs = require('fs');

const app = new Koa();
const router = new Router();

router
  .post('/oauth2/signup', function (ctx, next) {
    ctx.body = 'Hello World!';
  })
  .get('/oauth2/signup', function (ctx, next) {
    ctx.body = 'Hello World!';
  });

app.use(router.routes());

app.listen(3003);

console.log('listening on port 3003');
