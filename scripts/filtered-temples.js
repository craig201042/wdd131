document.querySelector("#currentyear").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
        
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern Switzerland ",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg"
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico",
    location: "Chihuahu Mexico",
    dedicated: "1998, March, 7",
    area: 6800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-1569770-wallpaper.jpg"
  },
  {
    templeName: "Houston Texas",
    location: "Houston Texas",
    dedicated: "2000, August, 26",
    area: 33970,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple02.jpg"
  },

];
const container = document.getElementById('temples-container');
function createTempleCard(filteredTemples){
    container.innerHTML='';
    filteredTemples.forEach(temple => {
    // Create a card element
    const card = document.createElement('div');
    card.className = 'temple-card';

    const name = document.createElement('h2');
    name.textContent = temple.templeName;
    card.appendChild(name);

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`; 
    card.appendChild(area);

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName; 
    image.loading = 'lazy'; 
    card.appendChild(image);
    
    container.appendChild(card);
})}

const home=document.querySelector("#home");
const old=document.querySelector("#old");
const newed=document.querySelector("#new");
const large=document.querySelector("#large");
const small=document.querySelector("#small");
home.addEventListener("click", () => createTempleCard(temples));

newed.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year > 2000;
  });
  createTempleCard(filteredTemples);
});

old.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year < 1900;
  });
  createTempleCard(filteredTemples);
});

large.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(filteredTemples);
});

small.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(filteredTemples);
});

createTempleCard(temples); 