define([
	'backbone',
	'meetingModel'
], function(
	Backbone,
	Model
) {
	var MeetingList = Backbone.Collection.extend({

		url: 'turnin/meetings',

		// model type used for this collection
        model: Model,

        // sorting
        comparator: function(a, b) {
            // project order
            var aValue = a.get('project').id;
            var bValue = b.get('project').id;
            if (aValue < bValue) {
            	return -1;
            } else if (aValue > bValue) {
            	return 1;
            }

            // meeting date order
            aValue = a.get('date');
            bValue = b.get('date');
            if (aValue < bValue) {
            	return -1;
            } else if (aValue > bValue) {
            	return 1;
            }

            // meeting name order
            aValue = a.get('name');
            bValue = b.get('name');
            if (aValue < bValue) {
            	return -1;
            } else if (aValue > bValue) {
            	return 1;
            }

            // duplicates not expected but...
            return 0;
        }
    });

	return MeetingList;
});