const pictureLits = [
    "img/01.jpg", 
    "img/02.jpg", 
    "img/03.jpg", 
    "img/04.jpg", 
    "img/05.jpg",
];
const card = document.querySelector(".card");

//create element 
for (let i = 0; i < pictureLits.length; i++) {
    const picPosition = pictureLits[i];
    const element = 
    `<div class="card-img ">
        <img src="${picPosition}" alt="">
    </div>`;
    card.innerHTML += element;
}

const cardLeft = document.querySelector(".card-left");

for (let i = 0; i < pictureLits.length; i++) {
    const picPosition = pictureLits[i];
    const element = 
    `<div class="card-small-img ">
        <img src="${picPosition}" alt="">
    </div>`;
    cardLeft.innerHTML += element;
}


//initial status of active class
const cardImg = document.getElementsByClassName("card-img");
let sliderPosition = 0;
cardImg[sliderPosition].classList.add("active");

//initial status of active-border class
const borderImg = document.getElementsByClassName("card-small-img");
let borderPosition = 0
borderImg[borderPosition].classList.add("active-border");

//to add and take off class active on click
const topButton = document.querySelector(".top");
const bottomButton = document.querySelector(".bottom");
console.log(topButton, bottomButton);

bottomButton.addEventListener("click", function() {

    if (sliderPosition < 4){
        cardImg[sliderPosition].classList.remove("active");
        borderImg[borderPosition].classList.remove("active-border");
    
        sliderPosition++;
        borderPosition++;
        
        cardImg[sliderPosition].classList.add("active");
        borderImg[borderPosition].classList.add("active-border");

    } else {
        cardImg[sliderPosition].classList.remove("active");
        borderImg[borderPosition].classList.remove("active-border");
    
        sliderPosition = 0;
        borderPosition = 0
        
        cardImg[sliderPosition].classList.add("active");
        borderImg[borderPosition].classList.add("active-border");
    }
});

topButton.addEventListener("click", function() {
    if (sliderPosition > 0) {
        cardImg[sliderPosition].classList.remove("active");
        borderImg[borderPosition].classList.remove("active-border");
    
        sliderPosition--;
        borderPosition--;
        
        cardImg[sliderPosition].classList.add("active");
        borderImg[borderPosition].classList.add("active-border");

    } else {
        cardImg[sliderPosition].classList.remove("active");
        borderImg[borderPosition].classList.remove("active-border");
    
        sliderPosition = 4;
        borderPosition = 4;
        
        cardImg[sliderPosition].classList.add("active");
        borderImg[borderPosition].classList.add("active-border");
    }
})



