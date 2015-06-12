Pet_Mate.CatRoute = Ember.Route.extend({
	controllerName: 'cat',
	renderTemplate: function(){
		this.render('cat');
	},
	model: function(params) {
		return Cats.findBy('_id', params.Cats__id);
	}
});