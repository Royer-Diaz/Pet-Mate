Pet_Mate.ExoticRoute = Ember.Route.extend({
	controllerName: 'exotic',
	renderTemplate: function(){
		this.render('exotic');
	},
	model: function(params) {
		return Exotics.findBy('_id', params.Exotics__id);
	}
});