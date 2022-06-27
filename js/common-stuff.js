const burger = document.querySelector('.hamburger');
const navPanel = document.querySelector('.navigation-panel');
const header = document.querySelector('header');

function toggleBurger() {
    burger.classList.toggle('is-active');
    navPanel.classList.toggle('is-visible');
}

window.onscroll = function(e) {
    e.stopPropagation();
    if (window.scrollY > 100 - 94) {
        if (!header.classList.contains('altered')) {
            header.classList.add('altered');
        }
    } else {
        header.classList.remove('altered');
    }
};

const placesData = [{
    imageSrc:'./LandingImages/Niagara.png',
    imageTitle:'Niagara',
    firstInfo:'8',
    middleInfo:'6',
    lastInfo:'1',
    name:'Niagara falls',
    rating:'4,6',
    location:'Niagara, Canada',
    price:'1700'
},
{
    imageSrc:'./LandingImages/Sofia.png',
    imageTitle:'Sofia',
    firstInfo:'8',
    middleInfo:'6',
    lastInfo:'1',
    name:'Haya Sufia Masque',
    rating:'4,9',
    location:'Istanbul, Turkey',
    price:'1800'
},
{
    imageSrc:'./LandingImages/burj Al Arab.png',
    imageTitle:'Arab',
    firstInfo:'8',
    middleInfo:'6',
    lastInfo:'1',
    name:'Burj Al Arab',
    rating:'4,8',
    location:'Dubai, United Arab Emirates',
    price:'2900'
},
{
    imageSrc:'./LandingImages/Everest.png',
    imageTitle:'Everest',
    firstInfo:'8',
    middleInfo:'6',
    lastInfo:'1',
    name:'Mount Everest',
    rating:'4,6',
    location:'Sulukhbu, Nepal',
    price:'1900'
}
]

const placeContainer=document.querySelector('.places-price');
const placeMarkUp=placesData.reduce((res,data)=>res+createPlace(data),'');
placeContainer.innerHTML=placeMarkUp;

const placeContainerMobile=document.querySelector('.carousel-frame');
placesData.forEach(item=>placeContainerMobile.innerHTML+=createPlace(item));

function createPlace(placeData) {
    return `<div class="place">
    <div class="photo">
        <img src="${placeData.imageSrc}" alt="${placeData.imageTitle}">
        <div class="infos-shadow"></div>
        <div class="infos-words">
            <p id="infos-first">${placeData.firstInfo} Activities</p>
            <p id="infos-middle">${placeData.middleInfo} Places</p>
            <p id="infos-last">${placeData.lastInfo} Week</p>
        </div>
    </div>
    <div class="place-name-reiting">
        <h6>${placeData.name}</h6>
        <div class="star">
            <img src="./LandingImages/star.png" alt="star">
            <p>${placeData.rating}</p>
        </div>
    </div>
    <div class="geo-location">
        <img src="./LandingImages/map-pin.png" alt="pin">
        <p>${placeData.location}</p>
    </div>
    <div class="price-book">
        <p class="price">$${placeData.price} </p>
        <p> /Person</p>
        <button>Book Now</button>
    </div>
</div>`
}


function createUsersTestimonial(testimonialData){
    return `<div class="testimonial-item">
    <div class="photo-name">
       <img class="photo" src="./LandingImages/david.png" alt="${testimonialData.username}"> 
       <div class="name-location">
           <div class="name">
            ${testimonialData.name}
           </div>
           <div class="location">
               <img class="flag" src="./LandingImages/USAflag.png" alt="flag">
               <p>${testimonialData.city}</p>
           </div>
       </div>
       <div class="rating">
        <img src="./LandingImages/star.png" alt="star">
        <div>${testimonialData.rating}</div>
    </div>
    </div>
    <div class="testimonial-text">
        ${testimonialData.text}
        </div>
</div>  `
}


// fetch ('http://localhost:3000/api/getusers')
// .then((response) => response.json())
// .then((json) =>createTestimonialFromUsers(json));
fetch ('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) =>createTestimonialFromUsers(json));

function createTestimonialFromUsers(users){
    const newUsers = users.slice(6,8);
    const usersData = newUsers.map(user=> {
        return {
        username:user.username,
        name:user.name,
        city:user.address.city,
        rating:user.id,
        text:user.company.catchPhrase
    }
    
    });

const testimonialContainer=document.querySelector('.testimonials');
usersData.forEach(item=>
    testimonialContainer.innerHTML+=createUsersTestimonial(item));
    testimonialContainer.children[0].classList.add('left');
    testimonialContainer.children[1].classList.add('right');
    
}
