Pet_Mate.Stud_catRoute = Ember.Route.extend({
	controllerName: 'stud_cat',
	renderTemplate: function(){
		this.render('stud_cat');
	},
	model: function() {
		return catsBreed;
	}
});