Pet_Mate.ReptileRoute = Ember.Route.extend({
	controllerName: 'reptile',
	renderTemplate: function(){
		this.render('reptile');
	},
	model: function(params) {
		return Reptiles.findBy('_id', params.Reptiles__id);
	}
});