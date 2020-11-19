console.log('Hello World!');

let myFirstBool = true;
let myFakeBool = 'true';

console.log('bool', myFirstBool);
console.log('fake', myFakeBool);
console.log('type of bool', typeof(myFirstBool));

//console.log(2=1);
//Error, we can not assign any individual data to each other

console.log(2==1);
//!!!No error!!!
//This is not an assignment!
//This is a comparison. So the result or output would be true or false as boolean

console.log(1=='1');
//Compares just values
//Compares while getting arguments as string

console.log(1==='1');
//Compares also data types
//Compares while getting arguments as own data type


let myBoolF = false;
let myBoolT = true;

//! mark makes the boolean value opposite.
console.log('myBoolF', myBoolF,'!myBoolF', !myBoolF);
console.log('myBoolT', myBoolT,'!myBoolT', !myBoolT);

console.log(!0,!1);
//0 = false, 1 = true


//Circuit Operators (&& - and , || - or)
/*

True = 1
False = 0

1 and 1 = 1
1 and 0 = 0
0 and 0 = 0
0 and 1 = 0

1 or 1 = 1
1 or 0 = 1
0 or 0 = 0
0 or 1 = 1

/////////////////////////////////////

1 && 1 = 1
1 && 0 = 0
0 && 0 = 0
0 && 1 = 0

1 || 1 = 1
1 || 0 = 1
0 || 0 = 0
0 || 1 = 1
*/



console.log(true&&true);
console.log(true&&false);
console.log(false&&false);
console.log(false&&true);

console.log(true||true);
console.log(true||false);
console.log(false||false);
console.log(false||true);


console.log(true&&!myFirstBool);
//Having a blue sweatshirt
let cond1 = 'blue';
//Having black hair
let cond2 = 'black';
//wearing medium size
let cond3 = 'medium';
//liking sneaker 
let cond4 = 'sneakers';
//coding JS
let cond5 = 'JS';
//Eating pizza
let cond6 = 'yes';
//liking dogs
let cond7 = 'yes';
//liking cats
let cond8 = 'yes';
//drinking coffee
let cond9 = 'coffee';
//studying in DCI
let cond10 = 'DCI';
//wearing a watch
let cond11 = 'yes';
//Playing video games
let cond12 = 'video games';
//using mac
let cond13 = 'mac';


//Having a blue sweatshirt
let answer1 =  prompt('What color is your sweatshirt');
//Having black hair
let answer2 =  prompt('What color is your hair');
//wearing medium size
let answer3 =  prompt('Which size do you wear');
//liking sneaker 
let answer4 =  prompt('What kind of shoes do you like');
//coding JS
let answer5 =  prompt('Which tech do you code');
//Eating pizza
let answer6 =  prompt('Do you eat pizza');
//liking dogs
let answer7 =  prompt('Do you like dogs');
//liking cats
let answer8 =  prompt('Do you like cats');
//drinking coffee
let answer9 =  prompt('What do you drink on the morning');
//studying in DCI
let answer10 = prompt('Where do you study');
//wearing a watch
let answer11 = prompt('Do you wear watch');
//Playing video games
let answer12 = prompt('what do you play');
//using mac
let answer13 = prompt('What\'s you laptop');

let group1 = answer1 == cond1 && answer6 == cond6 && answer7 == cond7;
let group2 = answer2 == cond2 && answer3 == cond3 && answer11 == cond11;
let group3 = answer4 == cond4 && answer9 == cond9 && answer10 != cond10;
let group4 = answer5 == cond5 && answer8 == cond8;

let result = group1 || group2 || group3 || group4;


console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
console.log(answer6);
console.log(answer7);
console.log(answer8);
console.log(answer9);
console.log(answer10);
console.log(answer11);
console.log(answer12);
console.log(answer13);

console.log(answer1 == cond1, answer6 == cond6, answer7 == cond7, group1);


console.log('Did I elected', result);