define([
	'jquery',
	'underscore',
	'backbone',
	'models/member',
	'collections/club',
	'views/member',
	'common'
], function( $, _, Backbone, Member, Club, MemberView, Common ) {

	var AppView = Backbone.View.extend({
		
		el: $("#club"),
		
		events: {
			"click #add": "createMember",
			"click #show-add": "showForm",
			"keypress input": "createOnEnter"
		},
		
		initialize: function () {
			this._name = this.$("#name");
			this.email = this.$("#email");
			
//			console.log(Club);
			
			Club.bind('add', this.addMember, this);
			Club.bind('reset', this.addAll, this);
			Club.fetch();
		},
		
		addMember: function( member ) {
			console.log('--addMember')
			console.log(member)
			var view = new MemberView({ model: member });
			$("#club").append(view.render().el);
		},

		addAll: function() {
			console.log('--addAll')
			console.log(Club.length)
			
			Club.each(this.addMember, this);
		},

		createOnEnter: function(e) {
			if (e.keyCode != 13) return;
			if (!this._name.val()) return;
			this.createMember();
		},
		
		createMember: function() {
			var that = this;
			var rookie = new Member;
			
			rookie.on("error", function(model, error) { // niet in initialize method?
				console.log('rookie not valid!');
				console.log(error);
			});

			rookie.on("change", function() {
				console.log('rookie changed!');
				Club.add(rookie);
				that._name.val('').blur();
				that.email.val('').blur();
			});

			rookie.set({ // wanneer zou je deze gebruiken?
				name: that._name.val(),
				email: that.email.val()
			});
		},
		
		showForm: function() {
			$('#add-member').slideToggle('fast');
		}
    });

	return AppView;
});