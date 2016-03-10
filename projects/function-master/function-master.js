// Should take an object and return its values in an array 
function objectValues(obj) {
    var out = [];
 
     for (var key in obj) {
     out.push(obj[key]);
     
 }
 return out;
}

// Should take an object and return all its keys in a string each separated with a space
function keysToString(obj) {
    return Object.keys(obj).join(" ");
}
    

// Should take an object and return all its string values in a string each separated with a space

function valuesToString(obj) {
    var out = "";
    for (var key in obj) {
        
    
    if (typeof obj[key] === 'string'){
        out += obj[key];
        out += ' ';
    
    }
    }
    return out.trim();
}


// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject (arg1) {
    if (Array.isArray(arg1)) return 'array';
    else return 'object';
}



// Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord (string) {
    var firstLetter = string[0];
    var restOfWord = string.substring(1); 
    return firstLetter.toUpperCase() + restOfWord;
}



// Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {
    var split = string.split(" ");
    var out = "";
    for (var i = 0; i < split.length; i++) {
        out += capitalizeWord(split[i]) + ' ';
    }
    return out.trim();
}


// Should take an object with a name property and return 'Welcome <Name>!' 

function welcomeMessage(obj) {
    return 'Welcome ' +  capitalizeWord(obj.name) + '!';
    
}


// Should take an object with a name and a species and return '<Name> is a <Species>'

function profileInfo (obj) {

    
    return capitalizeWord(obj.name) + ' is a ' + capitalizeWord(obj.species);
    
}

//  Should take an object, if this object has a noises array return them as a string separated by a space, 
// if there are no noises return 'there are no noises' 

function maybeNoises (obj) {
    if(obj.noises === undefined){
        return 'there are no noises' 
    }

    if(obj.noises.length<1){
        return 'there are no noises'
    }
    else return obj.noises.join(' ');

}


// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

function hasWord(wordString, word) {
    if (wordString.includes(word)) {
        return true
    }
    else return false
}


//  Should take a name and an object and add the name to the object's friends array then return the object

function addFriend(name, obj) {
    
    obj.friends.push(name);
    return obj;
}


// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, obj) {
    // if (obj.friends === undefined) return false;
    // return obj.friends.includes(name);
    if (obj.friends === undefined) return false;
    return (obj.friends.indexOf(name) > -1)
        
}

// Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function arrayIncludes(array, element){
    return (array.indexOf(element) > -1);
}
function nonFriends(name, people) {
    var out = [];
    
    var person;
    for (var i = 0; i<people.length; i++) {
        if (people[i].name === name) person = people[i];
    }
    var friends = person.friends;
    
    for(var j = 0; j<people.length; j++) {
        if(people[j] === person) continue;
        var currentPerson = people[j];
        if(currentPerson === person) continue;
        
        
        if(!arrayIncludes(friends, currentPerson.name)) {
            out.push(currentPerson.name);
        }
    }
    
    
    return out;
}


// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>.
// If <key> does not exist on <object> create it.

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
    
}

// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

function removeProperties(obj, array) {
    for (var key in obj)
    if (array.indexOf(key) > -1) delete obj[key];
    
}


// Should take an array and return an array with all the duplicates removed 

function dedup(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
    if (arr.indexOf(array[i]) > -1) continue;
    arr.push(array[i]);
    }
   
   
    return arr;
}











