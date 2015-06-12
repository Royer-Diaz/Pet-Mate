Pet_Mate.Buy_AmphibiansRoute = Ember.Route.extend({
	controllerName: 'buy_amphibians',
	renderTemplate: function(){
		this.render('buy_Aamphibians');
	},
	model: function() {
		return Amphibians;
	}
});