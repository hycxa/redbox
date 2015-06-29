var Builder = require('node-webkit-builder');
var nw = new Builder({
    files: ["package.json", "node_modules/**/**", "app/**/**", "!app/scss/**/**"], // use the glob format
    platforms: ['osx64']
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
