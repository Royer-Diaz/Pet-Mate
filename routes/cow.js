Pet_Mate.CowRoute = Ember.Route.extend({
	controllerName: 'cow',
	renderTemplate: function(){
		this.render('cow');
	},
	model: function(params) {
		return Cows.findBy('_id', params.Cows__id);
	}
});