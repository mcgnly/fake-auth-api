'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const mount = require('koa-mount');
const fs = require('fs');

const app = new Koa();
const router = new Router();

// app.use(serve('.'));

router.get('/reset_password', function *() {

	this.body = {};
});

router.get('/', function *() {

	this.body = {};
});

app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');
