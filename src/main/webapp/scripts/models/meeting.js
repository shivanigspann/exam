define([
	'backbone',
	'factory',
	'schema',
	'json!../scripts/schema/meeting.json'
], function(
	Backbone,
	Factory,
	Schema,
	MeetingSchema
) {
	var MeetingBase = Schema.Model.extend({
/*
		urlRoot: '/turnins/meetings', 
*/
		defaults: {
			name: '',
			project: '', 
			date: '',
			statusCode: 'NEW',
			buyer: '',
			assistantBuyer: '',
			billingMonth: '',
			vendorNumber: null,
			shotCounts: {
				pageForecast: 0,
				pageCurrent: 0,
				onFig: 0,
				flat: 0,
				imageTeam: 0,
			},
		},
	});

	var Meeting = Factory.getInstance().create(MeetingSchema, MeetingBase);
	return Meeting;
});