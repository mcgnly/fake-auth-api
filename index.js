'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const mount = require('koa-mount');
const serve = require('koa-static');
const querystring = require('querystring');
const customerList = require('./customerList.js');
const fs = require('fs');
const Mustache = require('mustache');

const app = new Koa();
const router = new Router();

function goGetCss(customer) {
	var cssPath = customerList[customer];
	return cssPath || '/css/index.css';
}

function parseQuery(querystringToParse) {
	var queryObj = querystring.parse(querystringToParse);
	return queryObj;
}

app.use(serve('.'));

var layoutTemplate = fs.readFileSync('./src/layout.mustache', 'utf8'); // bring in the template file
var loginBodyTemplate = fs.readFileSync('./src/login_body.mustache', 'utf8');
var forgotPasswordBodyTemplate = fs.readFileSync('./src/forgot_password_body.mustache', 'utf8');
var view = {
	app_name: 'Millio dashboard dev',
	css: '/css/index.css',
	client_id: '',
	redirect_uri: '',
	response_type: ''
};

router.get('/reset_password', function *() {
	var formObject = parseQuery(this.request.querystring);
	let newView = Object.assign({}, view, {
		css: goGetCss(formObject.client_id),
		client_id: formObject.client_id, // replace all of the data
		redirect_uri: formObject.redirect_uri,
		response_type: formObject.response_type,
	});

	this.body = Mustache.to_html(layoutTemplate, newView, { input_body: forgotPasswordBodyTemplate });
});

router.get('/', function *() {
	var formObject = parseQuery(this.request.querystring);
	let newView = Object.assign({}, view, {
		css: goGetCss(formObject.client_id),
		client_id: formObject.client_id, // replace all of the data
		redirect_uri: formObject.redirect_uri,
		response_type: formObject.response_type,
	});

	this.body = Mustache.to_html(layoutTemplate, newView, { input_body: loginBodyTemplate });
});

app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');
