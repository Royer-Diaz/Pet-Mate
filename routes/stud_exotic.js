Pet_Mate.Stud_exoticRoute = Ember.Route.extend({
	controllerName: 'stud_exotic',
	renderTemplate: function(){
		this.render('stud_exotic');
	},
	model: function() {
		return exoticBreed;
	}
});