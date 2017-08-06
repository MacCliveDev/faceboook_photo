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
 * Server listneing on port 7000
 * @param 	INT 7000 		[Port Number]
 * @param 	Callback    [Consoles the port at which Server is created]
 */
app.listen(4045, () => {
	console.log('\x1b[36m','Server listening on port','\x1b[1m', '\x1b[37m', '4045', '\x1b[0m')
	console.log(' Server Open at : ', '\x1b[33m', '\x1b[1m', 'http://localhost:4045', '\x1b[0m')
})