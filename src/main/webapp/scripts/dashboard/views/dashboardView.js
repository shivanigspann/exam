define([
	'marionette',
	'text!../scripts/dashboard/templates/dashboard.handlebars',
	'meetingHeaderView',
	'meetingGridView'
], function(
	Marionette,
	DashboardViewTemplate,
	MeetingHeader,
	MeetingGrid
) {
	console.log('Creating meeting dashboard view');
	var DashboardView = Marionette.Layout.extend({

		template: Handlebars.compile(DashboardViewTemplate),

		regions: {
			header: '#meetingsheader',
			grid: '#meetingsgrid'
		},

		onShow: function() {
			console.log('dashboard.onShow()');
			var header = new MeetingHeader();
			this.header.show(header);
			var grid = new MeetingGrid({model: this.model});
			this.grid.show(grid);
			grid.refresh();
		},

		addMeeting: function() {
			console.log('New meeting requested');
		},

		editMeeting: function() {
			console.log('Edit meeting requested');
		},

		removeMeeting: function() {
			console.log('Remove meeting requested');
		},

		gotoMeeting: function() {
			console.log('Meeting detail requested');
		},
	});
	console.log('Meeting dashboard view created');

	return DashboardView;
});