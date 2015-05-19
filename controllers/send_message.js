Pet_Mate.Send_messageController = Ember.Controller.extend({
	messageSent: false, 
	 actions: {
	 	sendMessage: function() {
	 		var message = $('#exampleInputName').val() + $('#inputEmail').val() + $('#contentMessage').val();
	 		this.set('messageSent', true);
	 	}
	 }
});




