let items=document.querySelector('.hcfe .hcfe-content .primary-container .page-width-container .main-content .article .accordion-homepage')
let sec=document.createElement("section")
sec.setAttribute("class","parent")
let heading=document.createElement("h3")
heading.textContent="My New FAQ"
sec.appendChild(heading)
items.appendChild(sec)