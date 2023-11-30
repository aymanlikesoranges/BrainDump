/*codingmaker_*/
let container = document.querySelector(".container");
let toggleBtn = document.querySelector('.toggle-btn');

dycalendar.draw({
   target:'#dycalendar', 
   dayformat: 'full', 
   type: 'month', 
   monthformat: 'full', 
   highlighttoday: true, 
   prevnextbutton: 'show'
});  

toggleBtn.onclick = () =>{
 container.classList.toggle('dark');
 document.body.classList.toggle('background-dark');
};

//MENU 
const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
