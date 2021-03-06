const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

for (let i = 0; i < items.length; i++) {
    document.querySelector(".items-container").innerHTML +=
        `<div class="item ">
            <img src="${items[i]}" alt="${title[i]}">
            <div class ="testo">
            <h2>${title[i]}</h2>
            <p>${text[i]}</p>
            </div>
        </div>`;
}

document.querySelector(".item").classList.add("active");

for (let i = 0; i < items.length; i++) {
    document.querySelector(".thumbnails-container").innerHTML +=
        `<div class="small ">
            <img src="${items[i]}" alt="${title[i]} thumbnail">
     </div>`;
}

document.querySelector(".small").classList.add("active");

let activeItem = 0;

const itemsImg = document.getElementsByClassName("item");
itemsImg[activeItem].classList.add("active");

const smallImg = document.getElementsByClassName("small");
smallImg[activeItem].classList.add("active");

const sopra = document.querySelector('.sopra');
const sotto = document.querySelector('.sotto');

sotto.addEventListener('click', function () {

    if (activeItem < items.length - 1) {
        itemsImg[activeItem].classList.remove('active');
        smallImg[activeItem].classList.remove('active');

        activeItem++;

        itemsImg[activeItem].classList.add('active');
        smallImg[activeItem].classList.add('active');

    } else if (activeItem = items.length - 1) {

        itemsImg[activeItem].classList.remove('active');
        smallImg[activeItem].classList.remove('active');

        itemsImg[0].classList.add('active');
        smallImg[0].classList.add('active');
        activeItem = 0;
    }
})

sopra.addEventListener('click', function () {

    if (activeItem > 0) {
        itemsImg[activeItem].classList.remove('active');
        smallImg[activeItem].classList.remove('active');

        activeItem--;

        itemsImg[activeItem].classList.add('active');
        smallImg[activeItem].classList.add('active');

    } else if (activeItem == 0) {

        itemsImg[0].classList.remove('active');
        smallImg[0].classList.remove('active');

        itemsImg[items.length - 1].classList.add('active');
        smallImg[items.length - 1].classList.add('active');
        activeItem = items.length - 1;
    }
})