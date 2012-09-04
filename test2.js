

    //demo data
    /*
var members = [
        { name: "Pietje", status: "will attend lunch", tickets: "10", email: "anemail@me.com", type: "gold" },
        { name: "Feitze", status: "silent...", tickets: "45", email: "anemail@me.com", type: "gold" },
        { name: "Connie", status: "lunches with ordinary people", tickets: "-3", email: "anemail@me.com", type: "general" },
        { name: "Gekke Gerda", status: "lunches with ordinary people", tickets: "6", email: "anemail@me.com", type: "patriot" },
        { name: "Sjors", status: "will attend lunch", tickets: "0", email: "anemail@me.com", type: "silver" },
        { name: "Maarten", status: "lunches with ordinary people", tickets: "1", email: "anemail@me.com", type: "rookie" },
        { name: "Xavier", status: "will attend lunch", tickets: "26", email: "anemail@me.com", type: "general" },
        { name: "Skoelen", status: "silent...", tickets: "15", email: "anemail@me.com", type: "gold" }
    ];
*/

    //define product model
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

    //define directory collection
    var Club = Backbone.Collection.extend({
        
        model: Member,
        
        url: "test2_collection.php",
        
    });
    
    var LunchClub = new Club;

    //define individual contact view
    var MemberView = Backbone.View.extend({
       
        tagName: "li",

		template: _.template($("#memberTemplate").html()),
		
		initialize: function() {
			this.model.bind('add', this.addMember, this);
		},

		render: function () {
			console.log('--MemberView.render')
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
    });

    //define master view
    var ClubView = Backbone.View.extend({
        el: $("#club"),

        events: {
			"click #add": "createMember",
			"click #show-add": "showForm",
			"keypress input": "createOnEnter"
		},
		
		initialize: function () {
			this._name = this.$("#name");
			this.email = this.$("#email");
			
			LunchClub.bind('add', this.addMember, this);
			LunchClub.bind('reset', this.addAll, this);
			
			LunchClub.fetch();
		},
		
		addMember: function(item) {
			var view = new MemberView({ model: item });
			$("#club").append(view.render().el);
		},
		
		addAll: function(item) {
			console.log('--addAll')
			LunchClub.each(this.addMember);
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
				LunchClub.add(rookie);
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


var Router = Backbone.Router.extend({
	app: null,
	
	routes: {
		'': 'index',
		'new': 'show'
	},
	
	init: function() {
		this.app = new ClubView();
	},
	
	index: function() {
		this.init();
	},
	
	show: function() {
		this.app = new ClubView();
		this.app.showForm();
	}
	
});

$(function(){
	new Router();
	Backbone.history.start({root: ''});
});