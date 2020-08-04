
/*export const add = (num1, num2) => {
    return num1 + num2;
}*/
//console.log(increment(5, 2)); 
//console.log(increment(5)); 

const increment = (number, value=1)=> number +value;
console.log(increment(5, 2)); 
console.log(increment(5)); 




// High order function

const func= (name)=>{
 return function(){
     if(name==="nishi"){
     console.log(`hello ${name} ur job is  `);
    }
 }

}
func("nishi")();


//FOR EACH LOOP

const arr=[23,40,50,60];
let a ='';
arr.forEach((val, index, array)=>{
    
    a+= val;
    console.log(`At index ${index}--sum is ${a}`);
   
    console.log(`At index ${index}-- value is ${arr[index]}`);
    console.log(`third parameter call whole array for its size {${arr}}`);
})


// CALLBACK functions

const friend = (frnd)=>{
   setTimeout(function()
   {console.log(`my friend is ${frnd}`);  frnd2("nehal");
} , 3000)  
    
}
 const frnd2 =(secondfrnd)=>{
     console.log(`she is out of station ${secondfrnd}`);
 }
 friend("aanchal");
 //frnd2("nehal");
 
 
 //Async /AWAIT
/* async function asyncfunc(){
     
    await friend("aashi");

    frnd2("ishita");
 }
 asyncfunc();*/

 async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    frnd(result); // "done!"
  }
  
  f();

