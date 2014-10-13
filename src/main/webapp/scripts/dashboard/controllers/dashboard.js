define([
    'marionette',
    'meetingList',
	'meetingDashboardView'
], function(
	Marionette,
	Meetings,
	DashboardView
) {
	console.log('Creating meeting dashboard controller');
	var MeetingDashboardController = {

		initialize: function(options) {
			console.log('Initialized meeting dashborad controller');
		},

		showAll: function(obj) {
			console.log('Showing dashboard');
			var model = new Meetings();
			var layout = new DashboardView({model: model, tenant: 'mcom', user: 'Randy'});
			obj.region.show(layout);
		},
	};
	console.log('Meeting dashboard controller created');
	
	return MeetingDashboardController;
});