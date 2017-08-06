///////////////////////////////////////////////////////////////
/* This is the starting point of the application server
//////////////////////////////////////////////////////////////

/**
 * Required Express web application framework and created a instance in variable app
 */
var express			=	require('express')
var app 				= express()
var request			= require('request')

/**
 * Server listneing on port 5005
 * @param 	INT 5005 		[Port Number]
 * @param 	Callback    [Consoles the port at which Server is created]
 */
app.listen(5005, () => {
	console.log('\x1b[36m','Server listening on port','\x1b[1m', '\x1b[37m', '5005', '\x1b[0m')
	console.log(' Server Open at : ', '\x1b[33m', '\x1b[1m', 'http://localhost:5005', '\x1b[0m')
})

app.get('/', function(req, res){
	var dataString = 
	'url=http://i.qkme.me/3ofxwf.jpg&access_token=EAACEdEose0cBAFd2cxC8iXZAo0MkqPo0aMmyHU1We8bv9dn6WEL5it8hE8ld8ZAldhSrAXstlZBCeVEDiRCzZChZBSZAVIKrdGFvq1d6aCR1ZCCdrH2Nwdpu5bz8xjKBO5dfTl1KlZAbua1MIG3cXwEK3bFaLwbexCUms1DFyPDOKUgtwoD1eIRxCrMs1uoDUYIZD';

	var options = {
			url: 'https://graph.facebook.com/v2.4/me/photos',
	    method: 'POST',
	    body: dataString
	}

	request(options, function(error, response, body){
		 if (!error && response.statusCode == 200) {
				console.log(body);
	    }
	    res.end()
	})
})


