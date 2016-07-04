var pkg     = require('./package.json');
var path    = require('path');
var Builder = require('systemjs-builder');
var name    = pkg.name;

var builder = new Builder();
builder
.loadConfig('systemjs.config.js')
.then(function() {
    builder.bundle(name, path.resolve(__dirname, 'bundles/', name + '.js'))
    .then(function() {
        console.log('Build complete.');
    })
    .catch(function(err) {
        console.log('Error', err);
    })
})
.catch(function(err) {
    console.log('Error config load', err);
});
