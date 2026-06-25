const form=document.querySelector("form");

const title=document.getElementById("Event-title");

const date=document.getElementById("Event-date");

const category=document.getElementById("event-categories");

const description=document.getElementById("event-description");

const container=document.getElementById("all-events-container");

const clear=document.getElementById("clear-event-btn");

const demo=document.getElementById("add-simple-btn");

const count=document.getElementById("count");

const search=document.getElementById("search");

function updateCount(){

count.innerText=document.querySelectorAll(".event-card").length;

}

form.addEventListener("submit",function(e){

e.preventDefault();

if(container.classList.contains("empty")){

container.classList.remove("empty");

container.innerHTML="";
}

const card=document.createElement("div");

card.className="event-card";

card.innerHTML=`

<button class="delete">✖</button>

<h3>${title.value}</h3>

<b>${date.value}</b>

<p><strong>${category.value}</strong></p>

<p>${description.value}</p>

`;

card.querySelector(".delete").onclick=function(){

card.remove();

if(container.children.length===0){

container.classList.add("empty");

container.innerHTML="No Events Yet";

}

updateCount();

}

container.appendChild(card);

form.reset();

updateCount();

});

clear.onclick=function(){

container.className="empty";

container.innerHTML="No Events Yet";

updateCount();

}

demo.onclick=function(){

title.value="Business Meeting";

date.value="2026-08-12";

category.value="Meetup";

description.value="Discuss upcoming company strategy and quarterly goals.";

form.requestSubmit();

}

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

document.querySelectorAll(".event-card").forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";

});

});