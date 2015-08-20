var key = process.env.ASANA_API_KEY;
if (!key) {
	console.error('Asana API key not specified in env var ASANA_API_KEY!');
	return 1;
}

var asana = require('asana');
var client = asana.Client.create().useBasicAuth(key);
client.users.me().then(function(me) {
	console.log(me);
});

