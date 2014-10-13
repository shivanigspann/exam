define([
	'marionette',
	'text!../scripts/dashboard/templates/header.handlebars',
], function(
	Marionette,
	HeaderTemplate
) {
	var MeetingHeaderView = Marionette.ItemView.extend({

		template: Handlebars.compile(HeaderTemplate),

		onShow: function() {
			// bind the grid
			console.log('Bind the header here');
		},
	});

	return MeetingHeaderView;
});

