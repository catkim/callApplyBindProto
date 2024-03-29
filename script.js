 'use strict';

 // object literal:
 let pieMaker = {
  crustRequest: function(shell){
    if(!shell){
      this.crust = "full"
    }else{
      this.crust = shell
    }
  },
  fillingRequest(flavor){
    this.filling = flavor
    if(this.filling){
      console.log(`${this.filling} pie coming up`);
    }
  },
  price:"free with magic words",
  addMagicWords(x, y){
    this.magicWords = `${x} and ${y}`;
  },
  taste: "sweet and delicous"
};

// we can inspect the pieMaker object in the console, we see three methods(crustRequest,fillingRequest and addMagicWords) and two properties(price and taste)
console.dir(pieMaker);

//we can invoke the pieMaker method fillingRequest and pass in an apple filling:
// ---->  remove double backslash and instruction text<---  pieMaker.fillingRequest("apple");

//if we console.log we see our apple pie being made and the pieMarker object has a new property "filling" with a value of apple:
// ---->  remove double backslash and instruction <---  console.log(pieMaker);

// all of this is pretty straight forward we can call pieMaker again using the crustRequest method and pass a value for crust:
 // ---->  remove double backslash and instruction text <--- pieMaker.crustRequest('lattice');

// now we can look at pieMaker and see that it has the crust property with the lattice value:
// ---->  remove double backslash and instruction text <--- console.dir(pieMaker);

// super straightforward and simple right?

//so what if we wanted to make another object literal for a pie of a different flavor and we want to reuse the code already written in pieMaker. We can use "call" to bind the context of "this" to the new object and pass the parameters for filling and crust:

 // ---->  remove double backslash and instruction <--- let specialPie = {}; //create the object

// ---->  remove double backslash and instruction <--- pieMaker.fillingRequest.call(specialPie, "blueBerry"); //invoke the fillingRequest method in pieMaker on the specialPie object ("this") and pass in "blueBerry"

// ---->  remove double backslash and instruction <--- pieMaker.crustRequest.call(specialPie, "criss-cross");//invoke the crustRequest method in pieMaker on the specialPie object ("this") and pass in "criss-cross"
// ---->  remove double backslash and instruction <--- console.log(specialPie);

//to pass in arguments in an array we can use apply
// ---->  remove double backslash and instruction <--- pieMaker.addMagicWords.apply(specialPie, ["please", "thanks"]);// invoke the addMagicWords method on the specialPie object and pass in an array of strings
// ---->  remove double backslash and instruction <--- console.dir(specialPie);

// so hopefully call and apply are a little less murky but of course there's more. :)

//if you look at the last object in the console log (specialPie) you will see it has three properies with values and another object called __proto__ and it has a bunch of built in methods.

//let's create another pie object
// ---->  remove double backslash and instruction <---  let extraSpecialPie = {}

 //instead of using call or apply let's use the handy setPrototypeOf method
 // ---->  remove double backslash and instruction <--- Object.setPrototypeOf(extraSpecialPie, pieMaker); // it's called with the global Object and setPrototypeOf method and you first pass in the object you want to apply the prototype on and then the object you are borrowing from.

//inspect the extraSpecialPie object and you'll see it has all the properies and methods from the object we borrowed from on the __proto__ object as well as the built in __proto__ object.
 // ---->  remove double backslash and instruction <--- console.dir(extraSpecialPie);

//when using call, apply or bind you only get a specific method set on the object with setPrototypeOf you get the whole shabang

//Looking at the taste property on the extraSpecialPie object
// ---->  remove double backslash and instruction <--- console.log(extraSpecialPie.taste);

//if we update the pieMaker object with a request for an anchovy filling
// ---->  remove double backslash and instruction <--- pieMaker.fillingRequest('anchovy');
// ---->  remove double backslash and instruction <--- pieMaker.taste = "salty and terrible"

//our extraSpecialPie now also has a taste of salty and terrible
// ---->  remove double backslash and instruction <--- console.log('extraSpecialPie.taste is', extraSpecialPie.taste);

//but if we add some fairy dust to the extraSpecialPie
// ---->  remove double backslash and instruction <--- extraSpecialPie.fairyDust = true;

//we see it on our object
// ---->  remove double backslash and instruction <--- console.dir(extraSpecialPie);

//but not on the pieMarker object
// ---->  remove double backslash and instruction <--- console.log('pieMaker has ', pieMaker.fairyDust, 'for the fairyDust property');

//this is called delegation

//bind it's similar to call and apply but it's used to bind an object to a function
function eatPie(){
  console.log(`Yum, enjoying this ${this.filling} pie`);
}

// ---->  remove double backslash and instruction <--- let yum = eatPie.bind(specialPie);
// ---->  remove double backslash and instruction <--- yum();

//hope my explaination helped you understand call, apply bind and proto
