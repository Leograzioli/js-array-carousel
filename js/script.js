const pictureLits = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const card = document.querySelector(".card-left");
const cardRight = document.querySelector(".card-right");

//creating element 
for (let i = 0; i < pictureLits.length; i++) {
    let picPosition = pictureLits[i];
    const element =
            `<div class="card-img">
                <img src="${pictureLits[i]}" alt="" >
            </div>`;

    const elementRight =
            `<div class="card-small-img">
                <img src="${pictureLits[i]}" alt="">
            </div>`;

    card.innerHTML += element;
    cardRight.innerHTML += elementRight;
}

//initial status of active class
const cardImg = document.getElementsByClassName("card-img");
const cardSmallImg = document.getElementsByClassName("card-small-img");
let sliderPosition = 0;
cardImg[sliderPosition].classList.add("active");
cardSmallImg[sliderPosition].classList.add("active");

//onclick
const bottomBtn = document.querySelector(".bottom");
const topBtn = document.querySelector(".top");

bottomBtn.addEventListener("click", function() {
    
    cardImg[sliderPosition].classList.remove("active");
    cardSmallImg[sliderPosition].classList.remove("active");

    if (sliderPosition < 4){

        sliderPosition++;

    } else {

        sliderPosition = 0
    }

    cardImg[sliderPosition].classList.add("active");
    cardSmallImg[sliderPosition].classList.add("active");
});

topBtn.addEventListener("click", function() {

    cardImg[sliderPosition].classList.remove("active");
    cardSmallImg[sliderPosition].classList.remove("active");

    if (sliderPosition > 0){

        sliderPosition--;

    } else {

        sliderPosition = 4
    }

    cardImg[sliderPosition].classList.add("active");
    cardSmallImg[sliderPosition].classList.add("active");
});

for (let i = 0; i < cardSmallImg.length; i++) {
    const element = cardSmallImg[i];
    element.addEventListener("click", function() {

        cardImg[sliderPosition].classList.remove("active");
        cardSmallImg[sliderPosition].classList.remove("active");
        
        sliderPosition = i;

        cardImg[sliderPosition].classList.add("active");
        cardSmallImg[sliderPosition].classList.add("active")
        
    });  
}
