Pet_Mate.Farm_cowsRoute = Ember.Route.extend({
	controllerName: 'farm_cows',
	renderTemplate: function(){
		this.render('farm_cows');
	},
	model: function() {
		return Birds;
	}
});