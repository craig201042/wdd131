const numberDisplay=document.querySelector("#numberreview");

let Numreview=localStorage.getItem("review-list") || 0;

if(Numreview!==0){
    numberDisplay.textContent=`Your review number is:${Numreview}`;
}else{
    numberDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

Numreview++;

localStorage.setItem("review-list", Numreview);
