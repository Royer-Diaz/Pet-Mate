Pet_Mate.Buy_dogsRoute = Ember.Route.extend({
	controllerName: 'buy_dogs',
	renderTemplate: function(){
		this.render('buy_dogs');
	},
	model: function() {
		return Dogs;
	}
});