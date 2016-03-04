var animal = {
    
};
animal.species = "Dog";
animal["name"] = "Spark";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "rarrf";
noises.push("bark");
noises.unshift("roooof");
noises[noises.length] = "grrrr";
console.log(noises);
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal["noises"] = noises;
animal.noises.push("grroow");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'Duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var bird = { species: 'Bird', name: 'Feather', noises: ['squeek', 'churp churp'] };
var cat = { species: 'Cat', name: 'Tommy', noises: ['meow', 'scratch'] };
animals.push(bird);
animals.push(cat);
console.log(animals.length);

var  friends = [];

var a = function () {
    var randomAnimal = Math.floor ( Math.random() * animals.length );
    return animals [randomAnimal];
};

var r = a(animals);
friends.push(r.name);
console.log(friends);

duck["friends"] = friends;
console.log(duck);

var birdFriends =  [];
birdFriends.push(a(animals).name);
bird["friends"] = birdFriends;

var catFriends =  [];
catFriends.push(a(animals).name);
cat["friends"] = catFriends;

var animalFriends =  [];
animalFriends.push(a(animals).name);
animal["friends"] = animalFriends;


var search = function(searchName) {
    for(var i = 0; i<animals.length; i++) {
        if (searchName === animals[i].name){
        var found = animals[i];
        return found ; 
        }
        
    }
};
        
var edit = function (animalName, object) {
    for(var i = 0; i<animals.length; i++){
        if (animalName === animals[i].name) {
            animals[i] = object;
        }
        
    }
};    

var remove = function (animalName) {
    for(var i = 0; i<animals.length; i++) {
        if (animalName === animals[i].name) {
            animals.splice(i, 1);
        }
    }
};

var create = function (object) {
     if (object.name.length > 0 && object.species.length > 0) {
        var exist = false;
        for ( var i = 0; i <animals.length; i++){
          if (object.name === animals[i].name){
              exist = true;
          }
      }
      if (exist === false) {
          animals.push(object);
      }
     }
};
          
   

        
        
        
        
        
        
        
