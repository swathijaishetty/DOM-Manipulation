// To remove support text
let arr=document.querySelectorAll('.as-imagegrid-item-title .a11y');
console.log(arr)
//NodeList(7) [span.a11y, span.a11y, span.a11y, span.a11y, span.a11y, span.a11y, span.a11y]
arr.forEach(ele => {ele.remove();});


let s=document.querySelectorAll('.as-imagegrid-item .as-imagegrid-item-title')
let ans=[]
s.forEach(i =>{ans.push(i.innerText);});
console.log(ans)
// (7) ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']