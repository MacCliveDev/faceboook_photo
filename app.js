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

var url = 'http://i.qkme.me/3ofxwf.jpg' 
var access_token = 'Paste your access_token here'

app.get('/', (req, res) => {
	var dataString = 
	'url='+ url + '&access_token=' + access_token

	var options = {
			url: 'https://graph.facebook.com/v2.4/me/photos',
	    method: 'POST',
	    body: dataString
	}

	request(options, (error, response, body) => {
		 if (!error && response.statusCode == 200) {
				res.status(response.statusCode).send(body)
	    }
	    res.end()
	})
})


