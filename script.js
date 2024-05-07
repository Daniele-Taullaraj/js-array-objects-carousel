const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// prendo i 2 div dove aggiungero' le card
const mainCard = document.getElementById("main-card")
const smallCard = document.getElementById("little-card")


// per ciascun oggetto contenuto in images eseguo la funzione creaimg
images.forEach(creaImg)


// nella funzione mi serve l'oggetto e l'indice e li passo come argomenti
function creaImg(images, indice) {
    let mainImg;
    let smallImg;
    // imposto la prima immagine come immagine di partenza assegnando le classe active alla mainimg
    // e noopacity all'immagine sulla side
    if (indice == 0) {
        mainImg = ` <img src="./${images.image}" class="slide ${indice} active">
                    <div class="text-img active">
                    <h1>${images.title}</h1>
                    <p>${images.text}</p>
                    </div>`;
        mainCard.innerHTML += mainImg;
        smallImg = `<div class="relative">
                    <img src="./${images.image}" class="slide-lateral">
                    <div class="opacity Noopacity"></div>
                    </div>`
        smallCard.innerHTML += smallImg;

    } else {
        mainImg = ` <img src="./${images.image}" class="slide ${indice}">
                    <div class="text-img">
                    <h1>${images.title}</h1>
                    <h4>${images.text}</h4>
                    </div>`;
        mainCard.innerHTML += mainImg;
        smallImg = `<div class="relative">
                    <img src="./${images.image}" class="slide-lateral">
                    <div class="opacity"></div>
                    </div>`
        smallCard.innerHTML += smallImg;
    }
}





const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".previousBtn");

let opacity = document.getElementsByClassName("opacity");
let slides = document.getElementsByClassName("slide");
let textImg = document.getElementsByClassName("text-img")


// // ciclo per controllare tutti gli elementi con la classe slide
// for (let i = 0; i < slides.length; i++) {
//     // se trovo l'elemento contenenete la classe active do il consenso per...
//     if (slides[i].classList.contains("active")) {
//         // attraverso il bottone next andare avanti
//         next.addEventListener("click", function () {
//             // rimuovo dall'elemento attuale la classe active
//             slides[i].classList.remove("active");
//             textImg[i].classList.remove("active");
//             opacity[i].classList.remove("Noopacity");
//             // se andando avanti arrivo alla max.lenght ressetto il contatore e assegno allo zeresimo elento la classe active
//             if (i == (slides.length - 1)) {
//                 slides[0].classList.add("active");
//                 textImg[0].classList.add("active");
//                 opacity[0].classList.add("Noopacity")
//                 i = 0;
//                 // se invece posso ancora andare mi sposto di 1
//             } else {
//                 slides[i + 1].classList.add("active");
//                 textImg[i + 1].classList.add("active");
//                 opacity[i + 1].classList.add("Noopacity")
//                 i++;
//             }
//         })
//         // attraverso il bottone prev tornare indietro
//         prev.addEventListener("click", function () {

//             if (slides[i].classList.contains("active")) {
//                 slides[i].classList.remove("active");
//                 textImg[i].classList.remove("active");
//                 opacity[i].classList.remove("Noopacity")
//                 // se arrivo a 0 ,setto il contatore a max.lenght e assegno la classe active all'ultimo elemento
//                 if (i == 0) {
//                     slides[slides.length - 1].classList.add("active");
//                     textImg[slides.length - 1].classList.add("active");
//                     opacity[slides.length - 1].classList.add("Noopacity")
//                     i = slides.length - 1;
//                 } else {
//                     opacity[i - 1].classList.add("Noopacity")
//                     textImg[i - 1].classList.add("active");
//                     slides[i - 1].classList.add("active");
//                     i--;
//                 }
//             }
//         })
//     }
// }




// bonus timer
let i = 0
setInterval(function () {

    slides[i].classList.remove("active");
    textImg[i].classList.remove("active");
    opacity[i].classList.remove("Noopacity");

    i++
    console.log(i)
    if (i == slides.length) {
        i = 0
    }
    slides[i].classList.add("active");
    textImg[i].classList.add("active");
    opacity[i].classList.add("Noopacity")

}, 2000)




















































// const next = document.querySelector(".nextBtn");
// const prev = document.querySelector(".previousBtn");
// let opacity = document.getElementsByClassName("opacity");



// let slides = document.getElementsByClassName("slide");
// console.log(slides)


// // ciclo per controllare tutti gli elementi con la classe slide
// for (let i = 0; i < slides.length; i++) {
//     // se trovo l'elemento contenenete la classe active do il consenso per...
//     if (slides[i].classList.contains("active")) {
//         // attraverso il bottone next andare avanti
//         next.addEventListener("click", function () {
//             // rimuovo dall'elemento attuale la classe active
//             slides[i].classList.remove("active");
//             opacity[i].classList.remove("Noopacity")
//             // se andando avanti arrivo alla max.lenght ressetto il contatore e assegno allo zeresimo elento la classe active
//             if (i == (slides.length - 1)) {
//                 slides[0].classList.add("active");
//                 opacity[0].classList.add("Noopacity")
//                 i = 0;
//                 // se invece posso acnora andare mi sposto di 1
//             } else {
//                 slides[i + 1].classList.add("active");
//                 opacity[i + 1].classList.add("Noopacity")
//                 i++;
//             }
//         })
//         // attraverso il bottone prev tornare indietro
//         prev.addEventListener("click", function () {

//             if (slides[i].classList.contains("active")) {
//                 slides[i].classList.remove("active");
//                 opacity[i].classList.remove("Noopacity")
//                 // se arrivo a 0 ,setto il contatore a max.lenght e assegno la classe active all'ultimo elemento
//                 if (i == 0) {
//                     slides[slides.length - 1].classList.add("active");
//                     opacity[slides.length - 1].classList.add("Noopacity")
//                     i = slides.length - 1;
//                 } else {
//                     opacity[i - 1].classList.add("Noopacity")
//                     slides[i - 1].classList.add("active");
//                     i--;
//                 }
//             }
//         })
//     }
// }