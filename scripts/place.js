document.querySelector("#currentyear").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();

document.querySelector("#area").value="13,976 sq mi";
document.querySelector("#people").value="23,894,394";
document.querySelector("#capital").value="Taipei";
document.querySelector("#lang").value="Mandari";
document.querySelector("#currency").value="New Taiwan dollar";

document.querySelector("#condition").value="Partly Cloudy";

document.querySelector("#temp").value="60 ℉";
document.querySelector("#wind").value="5 m/h";
let windchill=document.querySelector("#windchill");

function calculateWindChill(temperature, windSpeed) {
    if(temperature>=50 && windSpeed>3){
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }
    else{
        windchill.value= "N/A";
     }
}  

const wh=calculateWindChill(60, 5);
windchill.value=`${wh.toFixed(2)} ℉`;
  
