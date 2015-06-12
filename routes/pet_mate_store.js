Pet_Mate.Pet_Mate_storeRoute = Ember.Route.extend({
	controllerName: 'pet_Mate_store',
	renderTemplate: function(){
		this.render('pet_Mate_store');
	},
	model: function() {
		return Articles;
	}
});