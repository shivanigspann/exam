define([
	'mockservice',
	'text!/ui-core/scripts/abstract/applicationContext/test/JSON/applicationContextJSON.js',
	'text!test/data/meetingList.json'
], function(
	MockService,
	ApplicationContextJSON,
	MeetingsList
) {
	/*
	// Application Context
	$.mockjax({
		url: '../api/applicationContext',
		responseTime: 750,
		dataType: 'json',
		contentType: 'application/json',
		responseText: ApplicationContextJSON,
		type: 'GET',
		status: 200
	});
	*/

	$.mockjax({
		url: 'turnin/meetings',
		responseTime: 750,
		dataType: 'json',
		contentType: 'application/json',
		responseText: MeetingsList,
		type: 'GET',
		status: 200
	});
});

