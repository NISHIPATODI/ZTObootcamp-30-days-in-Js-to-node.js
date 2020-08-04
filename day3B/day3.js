/*const playersss = {
    name: "nishi",
    club:"bdwnr",
    adress:{
        city: "454660",
    },
    school:"kvp"
}

//const {name , ct , school, adress:{ pin}}= player;
//console.log(`${name} is pretty simple ${pin}`);
const { name, club, adress: { city } } = playersss;

//const { name, ct, address: {pin} } = player;

// console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${ct}`);*/



/*const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: "Los Angeles"
    }
  };
  
  //console.log( player.address.city );
  
  const { name, club, address: { city } } = player;
  
  console.log(`${name} plays for ${club}`);
  
  const student = {
    fname: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}
student.fname="mom";
const {fname , age , projects:{dicegame}}= student;
console.log(`${fname} is ${dicegame}`);

var a= "nishi";
let b= "nisi";
console.log(a);

let[f,g,h]=["abcc", "gdg", "gdsg"];
console.log(f + g +h);
console.log(`${f} ${g}`)

f="neved";
console.log(f);


function addressMaker(n, state) {
    const newAdress = {p: n, state: state};
    
    console.log(n);
}
//newAdress.state="mp";
addressMaker('Austin', 'Texas');

console.log(s);
var s="shalini";*/
import { add } from './data.js';

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}
//student.name="fname";
console.log(student.name);
const { name, age, projects: { diceGame } } = student;
console.log(`${name} is playing ${diceGame}`);
//console.log(age);

//console.log(diceGame);

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad"; // will be ignored. Mutation not allowed
  obj.newProp = "Test"; // will be ignored. Mutation not allowed
  console.log(obj); 

  function addressMaker(address) {
    const {city, state} = address;
    
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
    console.log(city+ state );


}

addressMaker({city: 'Austin', state: 'Texas'});

const stud = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]
for (let i of stud){
    //console.log{`${students.name}`};
    console.log( i.name + " lives in " + i.city );
}

const result= add(5,6);
console.log(result);