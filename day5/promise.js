const posts=[{
    title: 'post one',
},
{
    title: 'post two',
}];

function getPosts(){
    setTimeout(()=>{
        let output='';
    posts.forEach((post,index)=> {
        output+=`<li>${post.title}</li>`;

    
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);
          // callback(); 

          const error=false;
          if(!error){
resolve();
          }
          else{
              reject('error: something went wrong');
          }
        },2000
    );


    });
    
}

//createPost({title:'post four'}).then(getPosts)
//.catch(err=>console.log(err));

//PROMISE.all

/*const promise1= promise.resolve('hello nishi');

const promise2= 10;

const promise3= new Promise((resolve, reject)=> setTimeout(resolve,1000,'good'));*/
//Promise.all([promise1, promise2, promise3]).then(getPosts);

/*const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());
document.body.innerHTML=promise4;
    

Promise.all([promise1, promise2, promise3,promise4]).then(values=>console.log(values));
//console.log(promise2);*/


async function init(){
   // await createPost({title:'post three'});
    //getPosts();
    const res= await fetch(' http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6');
    const data= await res.json();
    console.log(data);

}
init();

/*async function fetchUsers(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();
    console.log(data);
}or (var i = 0; i < data.length; i++) {
    // append each person to our page
  }
fetchUsers()*/

//var mainContainer = document.getElementById("myData");
async function datafetching(){
    
await fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
}
datafetching();

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].name + ' ' + 'id  '+data[i].id;
      mainContainer.appendChild(div);
    }
  }
  