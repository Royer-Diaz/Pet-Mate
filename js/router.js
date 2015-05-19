Pet_Mate.Router.map(function() {
 this.resource('about');
 this.resource('contact', function() {
	this.resource('adresses');
    this.resource('map');
  });

 this.resource('home', {path:'/'});
 this.resource('find');	


 this.resource('for_sale', function() {
	this.resource('buy_birds');
	this.resource('buy_dogs');
	this.resource('buy_cats');
	this.resource('buy_reptiles');
	this.resource('buy_exotic');
  });

 this.resource('for_breed', function() {
	this.resource('stud_birds');
	this.resource('stud_dogs');
	this.resource('stud_cats');
	this.resource('stud_reptiles');
	this.resource('stud_exotic');
  });

this.resource('from_farm', function() {
	this.resource('farm_birds');
	this.resource('farm_cows');
	this.resource('farm_exotic');
	this.resource('farm_horses');
	this.resource('farm_pigs');
   
});

 this.resource('health');
 this.resource('pet_new');
 this.resource('find');

});

