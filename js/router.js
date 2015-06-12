Pet_Mate.Router.map(function() {
 this.resource('about');
 this.resource('contact', function() {
	this.resource('adresses');
    this.resource('send_message');
  });

 this.resource('home', {path:'/'});
 this.resource('find');	


 this.resource('for_sale', function() {
	this.resource('buy_birds');
	this.resource('bird', {path:'buy_birds/:bird_id'});
	this.resource('buy_dogs');
	this.resource('dog', {path:'buy_dogs/:dog_id'});
	this.resource('buy_cats');
	this.resource('cat', {path:'buy_cats/:cat_id'});
	this.resource('buy_reptiles');
	this.resource('reptile', {path:'buy_reptiles/:reptile_id'});
	this.resource('buy_exotic');
	this.resource('exotic', {path:'buy_exotics/:exotic_id'});
	this.resource('buy_amphibians');
	this.resource('amphibian', {path:'buy_amphibians/:amphibian_id'});
  });

 this.resource('for_breed', function() {
	this.resource('stud_dogs');
	this.resource('dog', {path:'stud_dogs/:dog_id'});
	this.resource('stud_cats');
	this.resource('cat', {path:'stud_cats/:cat_id'});
	this.resource('stud_exotic');
	this.resource('exotic', {path:'stud_exotics/:exotic_id'});
  });

this.resource('from_farm', function() {
	this.resource('farm_birds');
	this.resource('bird', {path:'farm_birds/:bird_id'});
	this.resource('farm_cows');
	this.resource('cow', {path:'farm_cows/:cow_id'});
	this.resource('farm_exotic');
	this.resource('exotic', {path:'farm_exotics/:exotic_id'});
	this.resource('farm_horses');
	this.resource('horse', {path:'farm_horses/:horse_id'});
	this.resource('farm_pigs');
    this.resource('pig', {path:'farm_pigs/:pig_id'});
});

 this.resource('health');
 this.resource('pet_new');
 this.resource('pet_mate_store');
 

});

