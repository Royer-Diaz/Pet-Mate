Pet_Mate.Stud_dogsRoute = Ember.Route.extend({
  controllerName: 'stud_dogs',
  template: function(){
  	this.render('stud_dogs');
  },
  model: function(){
  	return dogsBreed;
  }
});