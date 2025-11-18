const btn1=document.querySelector(".adbtn");
const input=document.querySelector("input");

btn1.addEventListener("click",()=>{
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.textContent=input.value;
    li.appendChild(span);
    const ul=document.querySelector(".list");
    ul.appendChild(li);
    const btn=document.createElement("button");
    btn.textContent="Delete";

    li.appendChild(btn);
    btn.addEventListener("click",()=>{
        ul.removeChild(li);
    })
    input.value = "";
})