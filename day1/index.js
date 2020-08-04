// declaring variable
  let fname="nishi";
  let lname="patodi";
  //let fullname= fname +","+lname;
  //console.log(fulllname);
  console.log(fname);
 // let age= 12;
 let emp="true";
var a=5;
// console.log(age);
 console.log(a);

 let name = "Gator";
let age = 1;
age = age + 1;

console.log('My dog ' + name + ' is turning ' + age + '.');
//const keyword
const n= "nishi";
//n= 'patodi';
let p="patodi";
//terminators are not imp to write
console.log(p)

console.log(n);

console.log( `${n}  ${p} ` );

// to write string alog variable values
console.log( `hello ${n}   ` );
console.log( "hello" + n   );
console.log( "hello" + ` ${n}` .trim()  );
console.log( 'ffhg   '+ n   + '   ghjkj'. toUpperCase() );


let full= `${fname} ${lname}`;
console.log( full );

let ex = 7.77;
console.log( typeof ex );

let exm = 7;
console.log( parseFloat(exm) );


//to convert into ascii code
let z= "abc";
console.log( z.charCodeAt(2));



var examp = 0;

console.log(Boolean(examp));

var c= 6;
var b= 5;
var a= b*c;
console.log(a);

//arrays in java
var arr= [5,6,7];
arr.push(4,2,3);
arr.pop();
//console.log(arr[0]);

//forEach loop to traverse array
arr.forEach((element) => {
  console.log(element)
});
 console.log(arr)

 // ARRAY CHALLENGE
 var challenge =['paper' , "bottle" , "sanitizer"];
 console.log( challenge+"\n");
 
 console.log('actual array \n '  + challenge+"\n");
 //console.log(challenge[0]);
 challenge[0]= 'towel';
 challenge.pop();
 challenge.push("bleach");
 console.log('UPDATED array \n['  + challenge);
  

 //OBJECTS IN javascript
 var obj={
   name:"nishi",
   class:"567",

   course:{
     dept:"cse",
   },
   arr:[5,6,7]
 }
 console.log(obj.arr);
 //CHALLENGE object

 var user={
 first:'nishi',
last:"patodi",
adress:{
  city:"indore",
  state:"mp",
},
hobbies:["read"," dance"],

 }
 //console.log(user);
 

 user['address','dept'] = {
  city: 'Tampa',
  state: 'Florida',

dept:{
  branch:'cse'
}
};

console.log(user);
 
//var relational operation

var a=5;
var b="5";
console.log(a===b);


//if else
var ag=15;
var s= 12;
if(ag<=12&&s<=12){
  console.log("younger");
}else if(ag<20){
  console.log("teanager");
}
else{
  console.log("adult");
}

// switch case
var user="guest";
switch(user){
  case "shopper":
    console.log("best");
    break;

    case 'guest':
    console.log("update");
    //break;


    default:
     console.log("no value");
    break;
} 

const cartItems = [
  { quantity: 1, price: 5 },
  { quantity: 3, price: 4 },
  { quantity: 10, price: 1}
];


// FOR   LOOP
var totalPrice=0, tax=0;
for(var i=0;i<3;i++){
  totalPrice+=cartItems[i].price;
  console.log(cartItems[i]);
  tax+=cartItems[i].price*8/100;    
}

console.log(totalPrice);
console.log(tax);
  
tax =totalPrice*8/100;
console.log("tax is "+tax);


//FOR of loop  /* it is like a for each loop*/
 var total=0;
for(var cartItem of cartItems) {
  total += cartItem.price * cartItem.quantity;
  console.log(total);

}

var array=[4,5,6];
// for of loop
for(var i of array){
  console.log(i);
}
//var j;
// for each loop
array.forEach((j)=>{
  console.log(j);
})


// WHILE loop
var count=0;
while (false) {
  count++;
  
  if(count >= 20) {
      break;
  }
  console.log(count);
}


count=0;
// DO WHILE loop
do{
count++;
//console.log(count);

}
while(count<=20){
  console.log(count);
//count++;
}

// do while challenge
 var update=0;
 do{
   update ++;
   if(update===10){
     console.log("limit");
   break;
    }
 }
 while(update<=10)





 //FUNCTIONS

 function getUserCredentials(firstName, lastName, email) {
  return `${firstName} ${lastName} | ${email}`;
  //return user;
}

const userCredentials = getUserCredentials("nishi", "patodi", "nhjk");

console.log(userCredentials);









/* function add(num1, num2) {
   var num= num1+num2;
  return num;;
}

console.log(add(5,10));


 // FUNCTIONS 
 function getUserCredentials(firstName, lastName, email) {
   // return firstName, lastName, email, tax;
   return `${firstName} ${lastname} ${email}`;
}

console.log(getUserCredentials('nishi', "patodi", 'np@hm'));
const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];*/
function getUserCredentials(firstName, lastName, email) {
  return `${firstName} ${lastName} | ${email}`;
  //return user;
}

const userCredentials = getUserCredentials("nishi", "patodi", "nh@gmail");

console.log(userCredentials);


