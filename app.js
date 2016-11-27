var koa = require('koa');
var request = require('koa-request');
 
var app = koa();
 
app.use(function *() {
 
    var options = {
    	url: 'https://www.cryptocompare.com/api/data'+this.request.url,
        headers: { 'User-Agent': 'request' }
    };
 
    var response = yield request(options); //Yay, HTTP requests with no callbacks! 
//     var info = JSON.parse(response.body);
 
    this.body =response.body;
});
 
app.listen(process.env.PORT || 3000);