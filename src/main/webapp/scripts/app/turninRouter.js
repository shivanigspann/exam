define([
    'marionette'
], function(
	Marionette
) {

	console.log('Creating router');
	var TurninRouter = Marionette.AppRouter.extend({
		appRoutes: {
			'': 'meetingDashboard'
		}
	});
	console.log('Router created');
	
	return TurninRouter;
});