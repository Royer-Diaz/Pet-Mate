Pet_Mate.Buy_catsRoute = Ember.Route.extend({
	controllerName: 'buy_cats',
	renderTemplate: function(){
		this.render('buy_cats');
	},
	model: function() {
		return Cats;
	}
});