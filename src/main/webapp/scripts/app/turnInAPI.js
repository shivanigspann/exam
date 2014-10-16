define([
    'marionette',
    'app',
	'meetingDashboardController'
], function(
	Marionette,
	TurnInApp,
	DashboardController
) {
	console.log('Creating API');
	var turnInAPI = {
		meetingDashboard: function() {
			console.log('Show meeting dashboard');
			DashboardController.showAll({
				region: TurnInApp.main,
				context: TurnInApp.context
			});
		},
		/*
		meetingDetail: function(id) {
			MeetingDetailController.showOverview({
				region: TurnInApp.main,
				context: TurnInApp.context,
				id: id
			});
		},
		*/
	};
	console.log('API created');
	
	return turnInAPI;
});