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

//initial status 
const cardImg = document.getElementsByClassName("card-img");
let sliderPosition = 0;
cardImg[sliderPosition].classList.add("active");

//to hide and show pics on click
const topButton = document.querySelector(".top");
const bottomButton = document.querySelector(".bottom");
console.log(topButton, bottomButton);


//button active
topButton.addEventListener("click", function() {

    if (sliderPosition < 4){
        cardImg[sliderPosition].classList.remove("active");
    
        sliderPosition++;
        
        cardImg[sliderPosition].classList.add("active");
    }
});

bottomButton.addEventListener("click", function() {
    if (sliderPosition > 0) {
        cardImg[sliderPosition].classList.remove("active");
    
        sliderPosition--;
        
        cardImg[sliderPosition].classList.add("active");
    }
})

