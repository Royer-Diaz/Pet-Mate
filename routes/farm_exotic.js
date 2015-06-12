Pet_Mate.Farm_exoticRoute = Ember.Route.extend({
	controllerName: 'farm_exotic',
	renderTemplate: function(){
		this.render('farm_exotic');
	},
	model: function() {
		return Birds;
	}
});