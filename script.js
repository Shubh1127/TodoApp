const input=document.getElementById("input-box")
const listCont=document.getElementById("list-container")
let button=document.querySelector("button")

 function addtask(){
   try{
    if(input.value==""){
        alert("You have to write something")
    }
    else{
        let li=document.createElement("li")
        li.innerText=input.value
        listCont.appendChild(li)
        input.value=""
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        // console.dir(li)
        saveData();
    }
   }catch{
        console.log("Wrong input")
   }
}
listCont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        // console.log(e.target.tagName==="LI")
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listCont.innerHTML)
}
function showtask(){
    listCont.innerHTML=localStorage.getItem("data")
}
showtask();
