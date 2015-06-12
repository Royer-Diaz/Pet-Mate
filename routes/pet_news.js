Pet_Mate.Pet_newsRoute = Ember.Route.extend({
	controllerName: 'pet_news',
	renderTemplate: function(){
		this.render('pet_news');
	},
	model: function() {
		return News;
	}
});