Pet_Mate.AmphibianRoute = Ember.Route.extend({
	controllerName: 'amphibian',
	renderTemplate: function(){
		this.render('amphibian');
	},
	model: function(params) {
		return Amphibians.findBy('_id', params.Amphibians__id);
	}
});