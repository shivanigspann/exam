define([
	'marionette'
], function(
	Marionette
) {
	var app = new Marionette.Application();
	console.log('Creating application');
	
	app.addRegions({
		main: '#main'
	});
	
	app.on('initialize:before', function() {
	});

	app.on('initialize:after', function() {
		// Start recording history
		Backbone.history.start();
		console.log('App history started');
	});
	console.log('Application created');

	return app;
});