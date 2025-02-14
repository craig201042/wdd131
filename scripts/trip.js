document.querySelector("#currentyear").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();

const trips = [
      {
        tripName: "Show-Gu River 2 days Trip",
        imageUrl: "images/rafting01.webp",
        description: "This exciting adventure will take us through the mountain area in one of the most remote places in Taiwan, in the west of the Hwai Lian Natural Reserve, very close to the coast of the Pacific Ocean.It has some exciting white water depending on the section."    
    },
    {
        tripName: "Da An River 1 day Trip",
        imageUrl: "images/rafting03.webp",
        description: "The Da An River flows from the center of Taiwan in a northwest direction through Miao Li to turn south, then turning into the Taiwan Strait. It has some exciting white water depending on the section of the river being done and the time of the year."
    },
    {
        tripName: "Gau Ping River 2 days Trip",
        imageUrl: "images/rafting05.webp",
        description: "The Gau Ping river runs from the high mountain ranges down through the Sacred Valley of the Da lin, past six turtles and into the city. It has some exciting white water depending on the section of the river being done and the time of the year."
    }
];

const container = document.querySelector('#adventure');
function createTripCard(travel){
    travel.forEach(trip => {
    const card = document.createElement('figure');

    const name = document.createElement('h3');
    name.textContent = trip.tripName;
    card.appendChild(name);

    const image = document.createElement('img');
    image.src = trip.imageUrl;
    image.alt = trip.tripName; 
    image.loading = 'lazy'; 
    card.appendChild(image);
    
    const description = document.createElement('p');
    description.textContent = trip.description;
    card.appendChild(description);

    container.appendChild(card);
})}

createTripCard(trips);
