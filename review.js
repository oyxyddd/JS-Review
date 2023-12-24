/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let var_1 = 3;
// 2.) Change the value of this variable
var_1 = 3+2;
// 3.) Change the data type of this variable
var_1 = 'Hello';
// 4.) Create another variable and the one from above to concatenate
let var_2 = ', world';
const var_3 = var_1 + var_2;
// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`${var_3}`)
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
const str = 'Sabrina';
console.log(str.charAt(4))
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
const str2 = 'Teddy';
const charCode = str2.charCodeAt(2);
console.log(charCode)
// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(charCode))
// Take your first and last name and concat()
firstName = 'Xinyi';
lastName = 'Ouyang';
console.log(firstName.concat(lastName));
// Create a string and make it return true using startsWith()
console.log(firstName.startsWith('Xin'))

// Now use any variable with endsWith() and return false
console.log(lastName.endsWith('Xin'));
// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
console.log(ozgur.includes('time'));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow'));
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log(vanessa.lastIndexOf('Vanessa'));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace('Goku','Vegeta'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
wifey_index = joshIsLookingForWifey.search('wifey');
console.log(wifey_index)

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7));
// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0,5));

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
console.log(splitTheBill.split(','));
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
console.log(splitTheBill.split(''));
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
console.log(angry.toLowerCase());
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());
// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1,4))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0,10));

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15,));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.


// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d !== a)
console.log(a < 15)
console.log(a < b < c)
console.log(c !== b !== a !== d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
const spinSentence = "The room is spinning like crazy!"
for (let i = 0; i < 10; i++){
  console.log(spinSentence);
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for (let i = 0; i < 20; i++){
// visionSpin
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
const sorry = "I'm sorry"
let i = 0;
while (i < 20){
  console.log(sorry);
  i++;
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (key in whateverQueenBeySaid){
  console.log(key,whateverQueenBeySaid[key]);
}
// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (index in lana){
  console.log(index);
}
// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for (ele of tia){
  console.log(ele);
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
perscholas.forEach((element) => {
  const varName = "PS";
  console.log(element+varName);
})
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() : add an element to the end of the array
// pop() : remove the last element of the array
// unshift(): add an element to the start of the array
// shift(): remove the first element of the array
// concat(): concate two arrays
// splice(): add or remove cetain elements 
// slice(): extract a section from an array
// sort(): sort an array
// includes(): return whether an array includes certain element 
// indexOf(): find the index of certain elemnt
// length : length property returns the number of elements in an array

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(' '));

// Remove orange
fruits.pop();

// Add strawberry, kiwi, and grapes at the end
fruits.splice(2,0,'strawberry', 'kiwi','grapes')
console.log(fruits);

// Remove apple
fruits.shift()

// Add mango at the beginning of the array
fruits.unshift('mango')
console.log(fruits);

// Add lemon, and grapefruit between mango and banana
fruits.splice(1,0,'lemon','grapefruit');


// Remove banana and strawberry
fruits.splice(3,2);
console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['durian', 'lychee', 'Papaya'];
const combineFruits = fruits.concat(exoticFruits);
console.log(combineFruits);

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(combineFruits.slice(-2));

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(monalissaIsMessy.sort());

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall.reverse())

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
console.log(RafaelNoBadWords.replace(/badword /g,''))

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const sum = numbersToAddUp.reduce((accumulator,element) => {
  return accumulator += element;
},0)
console.log(sum)
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const newFruits = [...fruits];
console.log(newFruits)
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const newNum = [...nums1, ...nums2];
console.log(newNum)

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const addAtEnd = [...newNum, 7, 8, 9];
console.log(addAtEnd)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const addAtBegining = [-1, -2, 0, ...newNum];
console.log(addAtBegining)
// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log(donutShop[1][0][1]);

// Tosi wants ihatethis. :) Print!
console.log(donutShop[2][0][0][1][0]);
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
const Teo = {
  person : true,
  gender : 'male',
  hungry : 'a bit'
}
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
if (Teo.person) {
  console.log('Teo is a person!');
} else{
  console.log('Teo is not a person!')
}
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
if (Teo.person){
  if (Teo.gender === 'male') {
    console.log('You got it right!')
  }else{
    console.log('Wrong, Teo is going to remove you from the class.')
  }
}
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
if (Teo.gender){
  if (Teo.hungry === 'hungry'){
    console.log("Let's buy Teo some tacos!");
  }else if(Teo.hungry === 'not hungry') {
    console.log("He doesn't need to eat.")
  }else{
    console.log("If Teo is not hungry, am I hungry?")
  }
}
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const Gustavo = 'coolest';
Gustavo === 'coolest' ? console.log('You got that right') : console.log("James wants to argue. He says he's the best!'")
// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting(){
  console.log("Hello, ma'amsir!");
}
sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function printString(str){
  console.log(`This is my ${str}`)
}
printString('House')
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(num1, num2, num3){
  let sum = 0;
  return sum = num1 + num2 + num3;
}
const [nb1, nb2, nb3] = [1, 3, 5];
console.log(add(nb1,nb2,nb3));
// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name){
  switch (name) {
    case 'Teo' :
      return '1st rule: You do not talk about Fight Club.'
      break;
    case 'Manara':
       return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
       break;
    case 'Liv':
       return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
       break;
    case 'Devin':
       return '4th rule: Only two guys to a fight.'
       break; 
    default :
      return 'No shirts'
}}

console.log(fightClub('Liv'))
console.log(fightClub("Marry"))

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello(){
  console.log('Hello')
  return function(){
    console.log('Goodbye');
  }
}
const bye = hello();
bye();
// Create a function expression with your first name as the variable and then print your first and last name
function printName(firstName){
  const lastName = 'Ouyang'
  console.log(firstName, lastName)
}
const fName = 'Xinyi';
printName(fName)
// Create an arrow function that accepts a number and have it return that number double

const double = (input) => {
  return input * 2;
}
console.log(double(9))
// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

const human ={
  name : 'John',
  age : 30,
  location : 'Boston'
}



// Access the name using dot notation
console.log(human.name)

// Access the age using square brackets
console.log(human['age'])
// Use object destructuring to access location
const {location} = human;
console.log(location)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability);
// Print cut
console.log(bulbasaur.moves[2]);

// Print Bulbahhhh!!!!!
bulbasaur.sound();

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1;

// Print an array that contains every single properties in bulbasaur
console.log(Object.keys(bulbasaur));
// Print every single properties one by one in the console
Object.keys(bulbasaur).forEach((prop) =>{
  console.log(prop);
});

// Print an array that contains every single values in bulbasaur
console.log(Object.values(bulbasaur))