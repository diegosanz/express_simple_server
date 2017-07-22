var express    = require('express');
var serveIndex = require('serve-index');

var app = express();
var port = '3000';

app.use('/', serveIndex('public', {'icons': true}));
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log(`Server listening at http://localhost:${port}`);
