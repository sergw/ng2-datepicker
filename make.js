var pkg     = require('./package.json');
var path    = require('path');
var Builder = require('systemjs-builder');
var name    = pkg.name;

var builder = new Builder();
var config = {
  baseURL: '.',
  transpiler: 'typescript',
  typescriptOptions: {
    module: 'cjs'
  },
  map: {
    typescript: './node_modules/typescript/lib/typescript.js',
    angular2: path.resolve('node_modules/@angular'),
    rxjs: path.resolve('node_modules/rxjs')
  },
  paths: {
    '*': '*.js',
    'moment': 'node_modules/moment/moment.js'
  },
  meta: {
    'node_modules/@angular/*': { build: false },
    'node_modules/rxjs/*': { build: false },
    'moment': { 'format': 'global' }
  },
};

builder.config(config);

builder
.bundle(name, path.resolve(__dirname, 'bundles/', name + '.js'))
.then(function() {
  console.log('Build complete.');
})
.catch(function(err) {
  console.log('Error', err);
});
