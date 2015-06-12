Pet_Mate.Buy_amphibiansRoute = Ember.Route.extend({
	controllerName: 'buy_amphibians',
	renderTemplate: function(){
		this.render('buy_Aamphibians');
	},
	model: function() {
		return Amphibians;
	}
});