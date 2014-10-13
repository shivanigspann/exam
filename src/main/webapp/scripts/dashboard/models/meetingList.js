define([
	'backbone',
	'meetingModel'
], function(
	Backbone,
	Model
) {
	var MeetingList = Backbone.Collection.extend({

		url: 'turnin/meetings',

		/* set model type used for this collection */
        model: Model,

        /* comparator determines how collection is sorted
        comparator: 'authorLast'
         */
    });

	return MeetingList;
});