Pet_Mate.DogRoute = Ember.Route.extend({
	controllerName: 'dog',
	renderTemplate: function(){
		this.render('dog');
	},
	model: function(params) {
		return Dogs.findBy('_id', params.Dogs__id);
	}
});