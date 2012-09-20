define([
	'underscore',
	'backbone'
], function( _, Backbone ) {
	
	var Member = Backbone.Model.extend({
		url: "test2_model.php",
		defaults: {
			status: "silent...",
			tickets: 0,
			type: "rookie"
		},
		
		initialize: function() {
			console.log('member.init');
		},
		
		validate: function(attributes) {
			if (attributes.name == '') {
				return { name: 'Name '};
			}
			if (attributes.email == '') {
				return 'Email required';
			}
		},
		
		save: function() {
			console.log('member.save');
		}
	});
	
	return Member;
});