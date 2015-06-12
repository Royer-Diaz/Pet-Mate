Pet_Mate.PigRoute = Ember.Route.extend({
	controllerName: 'pig',
	renderTemplate: function(){
		this.render('pig');
	},
	model: function(params) {
		return Pigs.findBy('_id', params.Pigs__id);
	}
});