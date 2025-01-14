const input=document.querySelector("#favchap");
const button=document.querySelector("button");
const list=document.querySelector("#list");
const li=document.createElement("li");
const deletbutton=document.createElement("button");



button.addEventListener("click", function(){
   if(input.value!==""){
    li.textContent=input.value;
    deletbutton.textContent="❌";
    li.append(deletbutton);
    list.append(li);
   }
});

deletbutton.addEventListener("click", function(){
    list.removeChild(li);
    input.focus();
})
input.value="";
input.focus();