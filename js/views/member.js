define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/member.html',
	'common'
], function( $, _, Backbone, memberTemplate, Common ) {
	
	var MemberView = Backbone.View.extend({
	
		tagName: "li",

		template: _.template( memberTemplate ),
		
		initialize: function() {
			this.model.bind('add', this.addMember, this);
		},

		render: function () {
			console.log('--MemberView.render')
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
   });

	return MemberView;
});
