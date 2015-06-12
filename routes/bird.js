Pet_Mate.BirdRoute = Ember.Route.extend({
	controllerName: 'bird',
	renderTemplate: function(){
		this.render('bird');
	},
	model: function(params) {
		return Birds.findBy('_id', params.Birds__id);
	}
});