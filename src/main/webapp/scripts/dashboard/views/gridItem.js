define([
	'marionette',
	'text!/turnin-ui/scripts/dashboard/templates/grid.handlebars',
	'jquery',
	'jqxcore',
	'jqxdata',
	'jqxscrollbar',
	'jqxbuttons',
	'jqxmenu',
	'jqxdropdownlist',
	'jqxlistbox',
	'jqxgridselection',
	'jqxgridcolumnsresize',
	'jqxgridaggregates',
	'jqxgridfilter',
	'jqxgrid'
], function(
	Marionette,
	GridTemplate
) {
	var MeetingGridView = Marionette.ItemView.extend({


		grid: null,
		griddata: null,

		template: Handlebars.compile(GridTemplate),

		initialize: function(options) {
		},

		modelEvents: {
			'request': 'requestStarted',
		    'reset': 'modelReset',
		    'sync': 'modelSynchronized',
		    'error': 'handleError'
		},

		refresh: function() {
			console.log('Fetching grid data');
			this.model.fetch();
		},

		requestStarted: function(collection, xhr, options) {
			console.log('Model synchronization started');
		},

		modelReset: function(collection, options) {
			console.log('Model reset');
		},

		modelSynchronized: function(collection, resp, options) {
			console.log('Model synchronization completed');
	        var rows = [];
			this.model.each(function(item) {
		        console.log('Got meeting: ' + item.get('name'));
				var row = {};
				row.id = item.get('id');
				row.name = item.get('name');
				var project = item.get('project');
				if (project) {
					row.project = project.get('id');
				}
				row.date = item.get('date');
				row.statusCode = item.get('statusCode');
				var owner = item.get('owner');
				if (owner) {
					row.ownerId = owner.get('id');
					row.ownerName = owner.get('name');
				}
				row.buyer = item.get('buyer');
				row.assistantBuyer = item.get('assistantBuyer');
				row.currentPageCount = 0;
				row.onFigCount = 0;
				row.flatCount = 0;
				row.imageTeamCount = 0;
				var counts = item.get('counts');
				if (counts) {
					if (counts.get('pageCount')) {
						row.currentPageCount = counts.get('pageCount');
					}
					if (counts.get('onFig')) {
						row.onFigCount = counts.get('onFig');
					}
					if (counts.get('flat')) {
						row.flatCount = counts.get('flat');
					}
					if (counts.get('imageTeam')) {
						row.imageTeamCount = counts.get('imageTeam');
					}
				}
				row.model = item;
		        rows.push(row);
		    });

			this.griddata.localdata = rows;
			$('#meetingsgrid').jqxGrid('updatebounddata');

			console.log('Grid refreshed with updated model');
		},

		handleError: function(collection, resp, options) {
			console.log('Model synchronization error: ' + options.error.arguments[1] + ': ' + options.error.arguments[2].message);
			console.log(resp.responseText);
		},

		// mount point may or may not be part of the DOM
		onRender: function() {
			console.log('Render grid');
		},

		// mount point is part of the DOM
		onShow: function() {
			// bind the grid
			console.log('Show the grid');

			var statusCodeDataAdapter = new $.jqx.dataAdapter(
				{
					datatype: "array",
					datafields: [
					   { name: 'label', type: 'string' },
					   { name: 'value', type: 'string' }
					],
					localdata: [
					   { label: 'New', value: 'NEW'},
					   { label: 'In Progress', value: 'IN_PROGRESS'},
					   { label: 'Ready', value: 'READY'},
					   { label: 'Closed', value: 'CLOSED'},
					],
					id: 'value'
				},
				{autoBind: true}
			);

			this.griddata = {
				localdata: [],
				datatype: 'array',
				datafields: [
			        // name - determines the field's name.
			        // value - the field's value in the data source.
			        // values - specifies the field's values.
			        // values.source - specifies the foreign source. the expected value is an array.
			        // values.value - specifies the field's value in the foreign source. 
			        // values.name - specifies the field's name in the foreign source.
			        { name: 'id', type: 'int' },
			        { name: 'project', type: 'int' },
			        { name: 'name', type: 'string' },
			        { name: 'date', type: 'date' },  // , format: "yyyy-MM-ddTHH:mm:ss-HH:mm"
			        { name: 'statusCode', type: 'statusCode' },
			        { name: 'status', value: 'statusCode', values: { source: statusCodeDataAdapter.records, value: 'value', name: 'label' }},
			        { name: 'ownerId', type: 'string' },
			        { name: 'ownerName', type: 'string' },
			        { name: 'buyer', type: 'string' },
			        { name: 'assistantBuyer', type: 'string' },
			        { name: 'currentPageCount', type: 'int' },
			        { name: 'onFigCount', type: 'int' },
			        { name: 'flatCount', type: 'int' },
			        { name: 'imageTeamCount', type: 'int' },
			        { name: 'model', type: 'array'},
				],
				id: 'id'
			};

			var dataAdapter = new $.jqx.dataAdapter(this.griddata, {
			    loadComplete: function (data) {},
				loadError: function (xhr, status, error) { alert("Error: " + error); }      
			});

			this.grid = $('#meetingsgrid').jqxGrid({
		    	width: '100%',
		    	//height: '300px',
		    	autoheight: true,
		    	showtoolbar: false,
		    	showstatusbar: true,
		        statusbarheight: 10,
		        showaggregates: true,
		    	editable: false,
		    	altrows: false,
		    	columnsresize: true,
		    	columnsreorder: false,
		    	filterable: true,
		    	filtermode: 'excel',
		    	selectionmode: 'none',

		        source: dataAdapter,
		        columns: [
		   	    	{ text: 'Project', datafield: 'project', filterable: true, width: '6%', align: 'center', cellsalign: 'left',
			    		cellsrenderer: function(row, datafield, value, defaulthtml, columnproperties) {
			    			// NOTE: jquery uses innerHTML for $.html() so we
			    			// construct a dummy node and use that as the parent
			    			// for the default html
			    			var element = $(defaulthtml);
			    			element.text('PRJ' + value);
			    			var dummy = $('<div></div>');
			    			dummy.append(element);
			    			return dummy.html();
			    		}
		   	    	},
			    	{ text: 'Name', datafield: 'name', filterable: true, width: '9%', align: 'center', cellsalign: 'left',
			    		cellsrenderer: function(row, datafield, value, defaulthtml, columnproperties) {
			    			// NOTE: jquery uses innerHTML for $.html() so we
			    			// construct a dummy node and use that as the parent
			    			// for the default html
			    			var element = $(defaulthtml);
			    			element.empty();
			    			var dummy = $('<div></div>');
			    			var anchor = $('<a href="#" onClick="gotoMeetingHandler(' + row + ');"/>');
			    			anchor.text(value);
			    			element.append(anchor);
			    			dummy.append(element);
			    			return dummy.html();
			    		}
		   	    	},
			    	{ text: 'Date/Time', datafield: 'date', filterable: false, width: '8%', align: 'center', cellsalign: 'left', cellsformat: 'MM/dd hh:mm' },
			    	{ text: 'Status', datafield: 'statusCode', displayfield: 'status', filterable: true, width: '6%', align: 'center', cellsalign: 'left' },
			    	{ text: 'Buyer', datafield: 'buyer', filterable: true, width: '12%', align: 'center', cellsalign: 'left' },
			    	{ text: 'Assistant Buyer', datafield: 'assistantBuyer', filterable: true, width: '12%', align: 'center', cellsalign: 'left' },
			    	{ text: 'Owner', datafield: 'ownerId', displayfield: 'ownerName', filterable: true, width: '12%', align: 'center', cellsalign: 'left' },
			    	{ text: 'Current', columngroup: 'currentCounts', datafield: 'currentPageCount', filterable: false, width: '7%', align: 'center', classname: 'aggregate-cell-column-header', cellsalign: 'right',
			    		// HACK to render aggregate value in the column header
			    		// * column group hierarchy specifies the header cells
			    		// * custom header renderer replaces the HTML with a container to hold the aggregate value
			    		// * custom aggregates renderer assigns the value to our header container
			    		menu: false,
			    		renderer: function(value, align, height) {
			    			return '<div class="numeric-value" style="height: 100%; float: right; margin-top: 4px; margin-right: 2px;"><span id="currentcount" style="width: 100%; height: 100%;"/></div>';
			    		},
			    		aggregates: [{ 'value':
		                    function (aggregatedValue, currentValue) {
		                        if (currentValue) {
		                            return aggregatedValue + currentValue;
		                        }
		                        return aggregatedValue;
		                    }
			    		}],
			    		aggregatesrenderer: function (aggregates, column, element) {
			    			$('#currentcount').text($(aggregates)[0].value);
			    			return '';
		                }
			    	},
			    	{ text: 'On Fig', columngroup: 'onFigCounts', datafield: 'onFigCount', filterable: false, width: '7%', align: 'center', classname: 'aggregate-cell-column-header', cellsalign: 'right',
			    		// HACK to render aggregate value in the column header
			    		// * column group hierarchy specifies the header cells
			    		// * custom header renderer replaces the HTML with a container to hold the aggregate value
			    		// * custom aggregates renderer assigns the value to our header container
			    		menu: false,
			    		renderer: function(value, align, height) {
			    			return '<div class="numeric-value" style="height: 100%; float: right; margin-top: 4px; margin-right: 2px;"><span id="onfigcount" style="width: 100%; height: 100%;"/></div>';
			    		},
			    		aggregates: [{ 'value':
		                    function (aggregatedValue, currentValue) {
		                        if (currentValue) {
		                            return aggregatedValue + currentValue;
		                        }
		                        return aggregatedValue;
		                    }
			    		}],
			    		aggregatesrenderer: function (aggregates, column, element) {
			    			$('#onfigcount').text($(aggregates)[0].value);
			    			return '';
		                }
			    	},
			    	{ text: 'Flat', columngroup: 'flatCounts', datafield: 'flatCount', filterable: false, width: '7%', align: 'center', classname: 'aggregate-cell-column-header', cellsalign: 'right',
			    		// HACK to render aggregate value in the column header
			    		// * column group hierarchy specifies the header cells
			    		// * custom header renderer replaces the HTML with a container to hold the aggregate value
			    		// * custom aggregates renderer assigns the value to our header container
			    		menu: false,
			    		renderer: function(value, align, height) {
			    			return '<div class="numeric-value" style="height: 100%; float: right; margin-top: 4px; margin-right: 2px;"><span id="flatcount" style="width: 100%; height: 100%;"/></div>';
			    		},
			    		aggregates: [{ 'value':
		                    function (aggregatedValue, currentValue) {
		                        if (currentValue) {
		                            return aggregatedValue + currentValue;
		                        }
		                        return aggregatedValue;
		                    }
			    		}],
			    		aggregatesrenderer: function (aggregates, column, element) {
			    			$('#flatcount').text($(aggregates)[0].value);
			    			return '';
		                }
			    	},
			    	{ text: 'Img Team', columngroup: 'imageTeamCounts', datafield: 'imageTeamCount', filterable: false, width: '7%', align: 'center', classname: 'aggregate-cell-column-header', cellsalign: 'right',
			    		// HACK to render aggregate value in the column header
			    		// * column group hierarchy specifies the header cells
			    		// * custom header renderer replaces the HTML with a container to hold the aggregate value
			    		// * custom aggregates renderer assigns the value to our header container
			    		menu: false,
			    		renderer: function(value, align, height) {
			    			return '<div class="numeric-value" style="height: 100%; float: right; margin-top: 4px; margin-right: 2px;"><span id="imgteamcount" style="width: 100%; height: 100%;"/></div>';
			    		},
			    		aggregates: [{ 'value':
		                    function (aggregatedValue, currentValue) {
		                        if (currentValue) {
		                            return aggregatedValue + currentValue;
		                        }
		                        return aggregatedValue;
		                    }
			    		}],
			    		aggregatesrenderer: function (aggregates, column, element) {
			    			$('#imgteamcount').text($(aggregates)[0].value);
			    			return '';
		                }
			    	},
			    	{ text: 'Action', filterable: false, width: '7%', align: 'center', cellsalign: 'center',
			    		menu: false,
			    		renderer: function(value, align, height) {
			    			return '';
			    		},
			    		cellsrenderer: function(row, datafield, value) {
			    			return '<div style="margin-left: 4px; margin-right: 4px;">'
			    				+ '<input class="action-icon action-edit" type="image" src="images/edit.png" onClick="editMeetingHandler(' + row + ');"/>'
			    				+ '<input class="action-icon action-delete" type="image" src="images/delete.png" onClick="deleteMeetingHandler(' + row + ');"/>'
			    				+ '<input class="action-icon action-refresh" type="image" src="images/toggle.png" onClick="refreshMeetingHandler(' + row + ');"/>'
			    				+ '</div>';
			    		}
			    	},
		   	    ],

		   	    // column header hierarchy
		   	    columngroups: [
		            { text: 'Page Count', align: 'center', name: 'pageCounts' },
		            { text: 'Current', align: 'center', name: 'currentCounts', parentgroup: 'pageCounts' },
		            { text: 'Image Count', align: 'center', name: 'imageCounts' },
		            { text: 'On Fig', align: 'center', name: 'onFigCounts', parentgroup: 'imageCounts' },
		            { text: 'Flat', align: 'center', name: 'flatCounts', parentgroup: 'imageCounts' },
		            { text: 'Img Team', align: 'center', name: 'imageTeamCounts', parentgroup: 'imageCounts' },
		        ],
		    });

			// fetch grid data
			this.refresh();

			console.log('Show grid completed');
		},
	});

	return MeetingGridView;
});

