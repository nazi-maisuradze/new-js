"use strict";
                    // burberBar

const navclass = document.getElementById("nav-id");
const burgerclass = document.getElementById("burger-id");

burgerclass.addEventListener("click", function()  {
    navclass.classList.toggle("active");
    burgerclass.classList.toggle("active");
  });




                    // accordion                      

let acordionElement = document.querySelectorAll(".accordion1");

for (let accordionItem of acordionElement) {
    accordionItem.addEventListener("click", function() {
        this.classList.toggle("active");
    })
}


                     ///     fetch      - (get post delete methods)    - GET METHOD     
                       

 fetch("https://reqres.in/api/users?delay=3" , {
    method:"GET" , 
 })  
 .then(function(response) {
    if (!response.ok){
        throw "error";
    }
    return response.json();
 })    
 .then(function(responsejs){
    console.log(responsejs);
    let ul = document.createElement("ul");

    responsejs.data.forEach(function(item) {
    let li = document.createElement("li");
    li.classList.add("listUsers");

    let winnerinfoP = document.createElement("p");
    winnerinfoP.textContent = `${item.first_name} ${item.last_name}`;
    let winnersimages = document.createElement("img");
    winnersimages.src = item.avatar;

    li.appendChild(winnerinfoP);
    li.appendChild(winnersimages);

    ul.appendChild(li);
   })

   document.getElementById("otherWinnersID").appendChild(ul);
 })                         
 .catch(function(error) {
    console.log(error);
 }) ;


                        // swiper



 const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});            





                    //form validation


const form = document.getElementById("form");
const userName = document.getElementById("userName");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");

form.addEventListener("submit", e=> {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector(".error");

    errorDisplay.innerText = message;
    input.classList.add("error");
    input.classList.remove("success");
}

const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector("error");
    error.innerText = " ";
    input.classList.add("seccess");
    input.classList.remove("error");
}

const validateInputs = () => {
    const usernameValue =userName.value.trim();
    const emailValue =Email.value.trim();
    const passwordValue =Password.value.trim();
}
if (userName.value === ""){
     setError(userName, "username is required");
} else {
    setSuccess(userName);
}

const regExPattern = /^[\w]{8,10}$/;


                              //filtre

let ul = document.getElementById("filterUl");
let input = document.getElementById("filteInput");
let listItems = [];                            

let filtre =async ()=>{
  let response = await fetch("https://reqres.in/api/users?delay=3");
  console.log (response);
  if (response.status !==200 ){
    throw Error ("error");
  }
  let data = await response.json();
  return data;
};

filtre()
.then((mosuliinfo)  => {
  mosuliinfo.data.forEach((element) => {
    let li = document.createElement("li");
    li.textContent=`${element.first_name} ${element.last_name}`;

    listItems.push(li);
    filterUl.appendChild(li);
  });
})
.catch ((error) => console.log(error));

function filtreData(searchFilter){
  listItems.forEach(item => {
    if (item.textContent.includes (searchFilter) ) {
      item.classList.remove("hide")
    }else {
      item.classList.add("hide");
    }
  })
}

input.addEventListener("keyup", function(element) {
  // console.log(element.target);
  filtreData(this.value);
})



import {cookies} from  './cookies.js' ;
import {headerBg} from  './cookies.js' ;

cookies();
headerBg();



 axios.get("https://reqres.in/api/users?delay=3")
.then(response => console.log(response.data.image))
.catch(error => console.log(error))


    //  scroll to top


    // export function scrollToTop(){
    //   let scrollBtn = document.getElementById("scrollToTopBtn");
    
    //   scrollBtn.addEventListener("click", function() {
    //     window.scrollTo( {
    //       top:0,
    //       behavior:'smooth',
    //     });
    //   });
    // }
    


      // let scrollToTopBtn = document.getElementById("scrollToTopBtn");

      // window.onscroll = function() {
      //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      //         scrollToTopBtn.style.display = "block";
      //     } else {
      //         scrollToTopBtn.style.display = "none";
      //     }
      // };

      // function scrollToTop() {
      //     document.body.scrollTop = 0; 
      //     document.documentElement.scrollTop = 0; 
      // }







// 2 to do list

// const inputElement = document.getElementById("input-id");
// const btnElement = document.getElementById("btn-id");
// const ulElement = document.getElementById("ul-id");

// btnElement.addEventListener("click", function(){
//     let userinputvalue = inputElement.value;
//     if (userinputvalue === " "){
//         return;
//     }
//     let liElement = document.createElement("li");
//     liElement.textContent = userinputvalue;

//     let deletebtn = document.createElement("i");
//     deletebtn.classList.add("fa-solid", "fa-eraser");
//     deletebtn.addEventListener("click", function() {
//         liElement.remove();
//     })
//     liElement.appendChild(deletebtn);

//     ulElement.appendChild(liElement);

//     inputElement.value= " ";
// })


// const lotterypromise = new promise(function(resolve, reject) {
//     setTimeout(function() {
//         if(Math.random()>=0.5){
//             resolve("you win");
//         }else{
//             reject("you lost");
//         }
//     } , 2000)
   
// })

// lotterypromise
// .then((response) => console.log(response))
// .catch((error)=>console.log(error));



