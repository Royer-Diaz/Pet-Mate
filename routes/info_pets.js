Pet_Mate.Info_petsRoute = Ember.Route.extend({
	controllerName: 'info_pets',
	renderTemplate: function(){
		this.render('info_pets');
	},
	model: function() {
		return Info;
	}
});