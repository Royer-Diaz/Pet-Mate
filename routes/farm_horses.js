Pet_Mate.Farm_horsesRoute = Ember.Route.extend({
	controllerName: 'farm_horses',
	renderTemplate: function(){
		this.render('farm_horses');
	},
	model: function() {
		return Birds;
	}
});