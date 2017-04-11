'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const mount = require('koa-mount');
const fs = require('fs');

const app = new Koa();
const router = new Router();

router
	.post('/oauth2/signup', function (ctx, next) {
		ctx.body = 'you posted your form to a really real DB';
	})
	.get('/oauth2/signup', function (ctx, next) {
		ctx.body = 'Hello World!';
	})
	.get('/internal/health', function (ctx, next) {
		ctx.body = 'super healthy';
	})
	.post('/oauth2/change-password', function (ctx, next) {
		ctx.body = 'you changed the password';
	})
	.post('/oauth2/auth', function (ctx, next) {
		ctx.body = 'you posted the login form';
	})
	.get('oauth2/confirm', function (ctx, next) {
		ctx.body = 'totally signed up';
	})
	.get('oauth2/reset-password', function (ctx, next) {
		ctx.body = 'now you get an auth token to reset your password';
	})
	.post('oauth2/reset-password', function (ctx, next) {
		ctx.body = 'you fake reset your password';
	})
  ;

app.use(router.routes());

app.listen(3003);

console.log('listening on port 3003');
