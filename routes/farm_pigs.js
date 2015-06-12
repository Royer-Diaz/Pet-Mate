Pet_Mate.Farm_pigsRoute = Ember.Route.extend({
	controllerName: 'farm_pigs',
	renderTemplate: function(){
		this.render('farm_pigs');
	},
	model: function() {
		return Birds;
	}
});