Pet_Mate.Farm_birdsRoute = Ember.Route.extend({
	controllerName: 'farm_birds',
	renderTemplate: function(){
		this.render('farm_birds');
	},
	model: function() {
		return Birds;
	}
});