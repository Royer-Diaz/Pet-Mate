Pet_Mate.Buy_exoticRoute = Ember.Route.extend({
	controllerName: 'buy_exotic',
	renderTemplate: function(){
		this.render('buy_exotic');
	},
	model: function() {
		return Exotic;
	}
});