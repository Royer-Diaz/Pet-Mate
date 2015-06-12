Pet_Mate.Buy_reptilesRoute = Ember.Route.extend({
	controllerName: 'buy_reptiles',
	renderTemplate: function(){
		this.render('buy_reptiles');
	},
	model: function() {
		return Reptiles;
	}
});