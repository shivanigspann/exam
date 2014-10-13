require.config({
	'baseUrl': 'scripts/',
	
    'paths': {
    	/*
    	 * Third-party technology stack
    	 */
		'jquery': '/ui-core/scripts/lib/jquery/jquery-1.11.0.min',
		'jqueryui': '/ui-core/scripts/lib/jquery-ui/jquery-ui-1.10.3.min',
		'underscore': '/ui-core/scripts/lib/underscore-min',
		'backbone': '/ui-core/scripts/lib/backbone-min',
		'marionette': '/ui-core/scripts/lib/backbone.marionette.min',
		'schema': '/ui-core/scripts/lib/backbone-schema',
		'handlebars': '/ui-core/scripts/lib/handlebars',
		'handlebarshelpers': '/ui-core/scripts/lib/extensions/handlebars-helpers/handlebars-helpers',
		'text': '/ui-core/scripts/lib/text',
		'json': '/ui-core/scripts/lib/json',
		'moment': '/ui-core/scripts/lib/moment.min',
		'bundle': '/ui-core/scripts/lib/jquery.i18n.properties-min-1.0.9',
		'backbonevalidation': '/ui-core/scripts/lib/backbone-validation-min',
		'validationextension': '/ui-core/scripts/lib/extensions/validation/validation-extension',

        'jqxcore': "/ui-core/scripts/lib/jqwidgets/jqxcore",
        'jqxdata': '/ui-core/scripts/lib/jqwidgets/jqxdata',
        'jqxscrollbar': '/ui-core/scripts/lib/jqwidgets/jqxscrollbar',
        'jqxbuttons': '/ui-core/scripts/lib/jqwidgets/jqxbuttons',
        'jqxmenu': '/ui-core/scripts/lib/jqwidgets/jqxmenu',
        'jqxdropdownlist': '/ui-core/scripts/lib/jqwidgets/jqxdropdownlist',
        'jqxlistbox': '/ui-core/scripts/lib/jqwidgets/jqxlistbox',
        'jqxexpander': '/ui-core/scripts/lib/jqwidgets/jqxexpander',
        'jqxgrid': '/ui-core/scripts/lib/jqwidgets/jqxgrid',
        'jqxgridselection': '/ui-core/scripts/lib/jqwidgets/jqxgrid.selection',
        'jqxgridcolumnsresize': '/ui-core/scripts/lib/jqwidgets/jqxgrid.columnsresize',
        'jqxgridaggregates': '/ui-core/scripts/lib/jqwidgets/jqxgrid.aggregates',
        'jqxgridfilter': '/ui-core/scripts/lib/jqwidgets/jqxgrid.filter',

		/*
		 * JQWidgets
        'jqxcore': "/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxcore",
        'jqxdata': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxdata',
        'jqxscrollbar': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxscrollbar',
        'jqxbuttons': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxbuttons',
        'jqxmenu': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxmenu',
        'jqxdropdownlist': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxdropdownlist',
        'jqxlistbox': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxlistbox',
        'jqxexpander': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxexpander',
        'jqxgrid': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxgrid',
        'jqxgridselection': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxgrid.selection',
        'jqxgridcolumnsresize': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxgrid.columnsresize',
        'jqxgridaggregates': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxgrid.aggregates',
        'jqxgridfilter': '/ui-core/scripts/lib/jqwidgets-ver3.2.1/jqxgrid.filter',
		 */

        /*
         * UI Core components
         */
		'factory': '/ui-core/scripts/app/factory',
		'resourceBundle': '/ui-core/scripts/abstract/bundle/resourceBundle',
/*

		'mediatorFormView': '/ui-core/scripts/abstract/formMediator/mediatorFormView',

		'dialogView': '/ui-core/scripts/abstract/dialog/views/dialogView',
		'dialogModel': '/ui-core/scripts/abstract/dialog/models/dialog',
		'confirmationDialog': '/ui-core/scripts/abstract/dialog/views/confirmationDialog',

		'navigationController': '/ui-core/scripts/abstract/navigation/controllers/navigationController',
		'navigationModel': '/ui-core/scripts/abstract/navigation/models/navigation',
		'navigationView': '/ui-core/scripts/abstract/navigation/views/navigationView',

		'blurScreenView': '/ui-core/scripts/abstract/blurScreen/views/blurScreenView',

		'applicationContext': '/ui-core/scripts/abstract/applicationContext/applicationContext',
		'applicationContextModel': '/ui-core/scripts/abstract/applicationContext/models/applicationContextModel',

		'jqueryUnslider': '/ui-core/scripts/lib/jquery-plugins/unslider',
*/
		/*
		 * Application components
		 */
		'app': 'app/turninApp',
		'router': 'app/turninRouter',
		'api': 'app/turninAPI',
		'meetingDashboardController': 'dashboard/controllers/dashboard',
		'meetingDashboardView': 'dashboard/views/dashboardLayout',
		//'meetingDashboardView': 'dashboard/views/gridItem',
		'meetingHeaderView': 'dashboard/views/headerItem',
		'meetingGridView': 'dashboard/views/gridItem',
		'meetingModel': 'dashboard/models/meeting',
		'meetingList': 'dashboard/models/meetingList',

		/*
		 * Testing mocks
		 */
		'mockjax': '/ui-core/scripts/lib/jquery.mockjax',
		'mockservice': '/ui-core/scripts/mock/mockService',
		'turninMockService': 'mocks/turninService',

		/*
		'productMockService': 'mock/productMockService',

		'createController': 'create/controllers/createController',
		'createProduct': 'create/models/createProduct',
		'createView': 'create/views/createView',
		'productInfoView': 'create/views/productInfoView',
		'productRowsView': 'create/views/productRowsView',
		'productRowView': 'create/views/productRowView',
		'productSchema': 'create/schema/productSchema.js',

		'productApp': 'app/productApp',
		'router': 'app/productRouter'
		*/
	},
	
	'shim': {
		jqueryui: {
			'deps': ['jquery'],
			'exports': '$'
		},

		underscore: {
			'exports': '_'
		},

		/*
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		 */

		backbone: {
			'deps': ['jquery', 'underscore', 'turninMockService'],
			'exports': 'Backbone'
		},

		marionette: {
			'deps': ['backbone', 'handlebars'],
			'exports': 'Marionette'
		},

		schema: {
			'deps': ['backbone', 'json'],
			'exports': 'schema'
		},

		handlebars: {
			'exports': 'Handlebars'
		},

		handlebarshelpers: {
			'deps': ['handlebars']
		},

		moment: {
			'exports': 'moment'
		},

		backbonevalidation: {
			'deps': ['jquery', 'backbone']
		},

		validationextension: {
			'deps': ['backbonevalidation'],
			'exports': 'validationextension'
		},

		factory: {
			exports: 'factory'
		},

		bundle: {
			'deps': ['jquery'],
			'exports': 'bundle'
		},

		resourceBundle: {
			'deps': ['jquery'],
			'exports': 'resourceBundle'
		},

/*
		mediatorFormView: {
			'exports': 'mediatorFormView'
		},

		dialogView: {
			'exports': 'dialogView'
		},

		dialogModel: {
			'exports': 'dialogModel'
		},

		confirmationDialog: {
			'exports': 'confirmationDialog'
		},

		navigationController: {
			'exports': 'navigationController'
		},

		navigationModel: {
			'exports': 'navigationModel'
		},

		navigationView: {
			'exports': 'navigationView'
		},

		applicationContextModel: {
			'exports': 'applicationContextModel'
		},

		applicationContext: {
			'exports': 'applicationContext'
		},
*/

		jqxcore: {
			'deps': ['jquery'],
			'exports': '$'
		},

		jqxdata: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxscrollbar: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxbuttons: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxmenu: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxdropdownlist: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxlistbox: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxexpander: {
			'deps': ['jquery', 'jqxcore'],
			'exports': '$'
		},

		jqxgridselection: {
			'deps': ['jquery', 'jqxcore', 'jqxgrid'],
			'exports': '$'
		},

		jqxgridcolumnsresize: {
			'deps': ['jquery', 'jqxcore', 'jqxgrid'],
			'exports': '$'
		},

		jqxgridaggregates: {
			'deps': ['jquery', 'jqxcore', 'jqxgrid'],
			'exports': '$'
		},

		jqxgridfilter: {
			'deps': ['jquery', 'jqxcore', 'jqxgrid'],
			'exports': '$'
		},

		jqxgrid: {
			'deps': ['jquery', 'jqxcore', 'jqxdata', 'jqxscrollbar', 'jqxbuttons', 'jqxmenu', 'jqxdropdownlist', 'jqxlistbox'],
			'exports': '$'
		},

		mockjax: {
			'deps': ['jquery']
		},

		mockservice: {
			'deps': ['jquery', 'mockjax'],
			'exports': 'mockservice'
		},

		turninMockService: {
			'deps': ['mockservice'],
			'exports': 'mockservice'
		}
	}
});

require([
	'marionette', 'app', 'router', 'api', 'resourceBundle', 'factory'
], function(
	Marionette, App, Router, API, ResourceBundle, Factory
) {
	console.log('Loading application');
/*
	// is this necessary?
	Backbone.View = (function(View) {
		return View.extend({
			constructor: function() {
				View.apply(this, arguments);
			}
		});
	})(Backbone.View);
*/
	App.addInitializer(function() {
		// create the router using the API
		new Router({controller: API});

		// load resource bundles
		ResourceBundle.getBundle({ 
			name: ['/ui-core/scripts/bundle/Messages', 'scripts/messages/turninMessages'], 
			mode: 'both', 
			cache: true 
		});

		// create the application factory
		Factory.getInstance();

		console.log('App initialized');
	});

	console.log('Starting application');
	App.start();
	console.log('Application started');
	console.log('Application loaded');
});
