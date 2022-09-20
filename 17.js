document.querySelector('.mlp-collapse-content .btn-container').remove();
document.querySelector('.mlp-collapser').remove();

let c=document.createElement("div")
c.setAttribute("class","date");

let cur=new Date();
c.innerText=cur;
// Tue Sep 20 2022 02:08:28 GMT+0530 (India Standard Time)

let par=document.querySelector('.mlp-collapse-content ')
par.appendChild(c)

