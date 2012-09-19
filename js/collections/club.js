define([
	'underscore',
	'backbone',
	//'lib/backbone/localstorage',
	'models/member'
], function( _, Backbone, Member ) {
	
	var Club = Backbone.Collection.extend({
		model: Member,
		
		//localStorage: new Store('clubs-backbone'),
		
		url: "test2_collection.php"
	});
	
	return new Club;
});
