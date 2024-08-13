 window.alert("It's Really Good!!");

 function wordLanks(myNoun, myAdjective, myVerb, myAdverb)
 {
   var result = "";
   result += "The " + myNoun + " " + myAdjective + " "+ myVerb + " to the store " + myAdverb;
   return result;
 }
 console.log(wordLanks("dog","big","ran","quickly"));

 var myArray = [40,60,20]
 myArray[0] = 60
 console.log(myArray[0])

let firstName = "Hossen";
let age = 20;
let student = true;

console.log("Tamzid",firstName);
console.log("you are",age,"years old..");
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Tamzid " + firstName;   //emportant//
document.getElementById("p2").innerHTML = "you are " + age + " years old..";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


let userName = window.prompt("what's your name?");  // Emportant //
console.log(userName);

let userName;
document.getElementById("myButton").onclick = function(){
  userName = document.getElementById("myText").value;
  console.log(userName);
  document.getElementById("myLabel").innerHTML = userName;


let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! you are", age, "years old");

let x;
x = Number("3.14");
console.log(x, typeof x);
let y;
y = String("Tamzid" );
console.log(y, typeof y);
let z;
z = Boolean("pizza");
console.log(z, typeof z);
