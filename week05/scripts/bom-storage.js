const input=document.querySelector("#favchap");
const button=document.querySelector("button");


let chaptersArray=getChapterList() || []; 

button.addEventListener("click", function(){
   if(input.value!==""){
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value="";
    input.focus();
   }
});
function displayList(item){
    let list=document.querySelector("#list");
    let li=document.createElement("li");
    let deletbutton=document.createElement("button");
    
    li.textContent=item;
    deletbutton.textContent="❌";
    li.append(deletbutton);
    list.append(li);
    deletbutton.addEventListener("click", function(){
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem("myFavBookList", JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBookList"));
}

chaptersArray.forEach((chapter)=>{
    displayList(chapter);
});

deleteChapter=(item)=>{
    chapter=chapter.slice(0, chapter.length - 1);
    chaptersArray=chaptersArray.filter((chapter)=>chapter!==item);
    setChapterList();
}