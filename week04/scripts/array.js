//  arrays.js
const steps = ["one", "two", "three"];
const grades=['A', 'B', 'A'];
const fruits=['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const numbers=[12, 34, 21, 54];
const luckyNumber=21;

const listTemplate=(step)=> {
    return `<li>${step}</li>`;
  }

const letterGrade=(grade)=>{
    let point=0;
    if(grade=="A"){
        point=4;
    }
    if(grade=="B"){
        point=3;
    }
    return point;
}
const stepsHtml =steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(); // set the innerHTML

const gpaPoints=grades.map(letterGrade);

const pointsTotal=gpaPoints.reduce((total, item)=>total+item, 0);

const gpa=pointsTotal/gpaPoints.length;

const shortFruit=fruits.filter((fruit)=>fruit.length<6);

const luckyIndex=numbers.indexOf(luckyNumber);