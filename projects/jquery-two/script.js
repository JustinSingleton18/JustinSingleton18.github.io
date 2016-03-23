// $(function(){
//   var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

// // Write and call a function that expects an array as an argument. 
// // Within this function, create a <ul> with the ID avengers and append it to the DOM. 

// // Next, still within this function, write a loop that creates an <li> and appends it to the ul for each item in the array. 
// // For each item, add a class corresponding to the item's content.
// // For example, the first item in the array should have an element that looks like <li class="iron-man">Iron Man</li>.

// // Hint
// // .split(), .join(), .toLowerCase() and .replace() are some useful functions you might investigate.

// function createAvengers(avengers) {
  
//   var $avengers = $('<ul>');
//   //.attr('id', 'avengers');
  
//   var listItems = avengers.map(CreateAvenger);
      
//     var kebab = avenger.toLocaleLowerCase().replace(" ", "-");
//     $li.addClass(kebab);
    
//     return $li;
    

  
//   $avengers.append(listItems);
  
//   $('body').append($avengers);

// createAvengers(avengers);

// //Write and call a new function that removes the <li>s for Ant Man and Wasp, and adds an <li> for Captain America.
// function avengersReassemble(){
//   var $avengers = $('#avengers');
  
// $('.ant-man, .wasp', $avengers).remove();
// var $captAmerica = $('<li>')
// .addClass('captain-america')
 
// $avengers.append($captAmerica);
// }
// avengersReassemble();

// $('.avengers-assemble').on('click', function (event){
//   createAvengers(avengers);
// })
// });