Pet_Mate.Stud_dogsController = Ember.Controller.extend({
	messageSent: false, 
	 actions: {
	 	viewDetails: function() {
	 		alert('funciono bien!');
	 	 this.set('messageSent', true);	
	 	}
	 }
});