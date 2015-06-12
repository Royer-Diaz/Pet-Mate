Pet_Mate.HorseRoute = Ember.Route.extend({
	controllerName: 'horse',
	renderTemplate: function(){
		this.render('horse');
	},
	model: function(params) {
		return Horses.findBy('_id', params.Horses__id);
	}
});