Pet_Mate.Buy_birdsRoute = Ember.Route.extend({
	controllerName: 'buy_birds',
	renderTemplate: function(){
		this.render('buy_birds');
	},
	model: function() {
		return Birds;
	}
});