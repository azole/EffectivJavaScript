function simpleURL(protocol, domain, path) {
	return protocol + "://" + domain + "/" + path;
}

var paths = ['product', 'banner', 'brand'];
var domain = 'www.manplus.com.tw';


// version 1
var callbackFn = function(path){
	return simpleURL('http', domain, path);
};
var urls = paths.map(callbackFn);

console.log(urls);

// version 2
// var urls = paths.map(simpleURL.bind(null, 'http', domain));
// console.log(urls);

// var callbackFn = simpleURL.bind(null, 'http', domain);
// var urls = paths.map(callbackFn);
