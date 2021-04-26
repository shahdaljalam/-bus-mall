'use strict'

let imagesArray = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg',
    'usb.gif'
];

console.log(1);

const imageSec = document.getElementById('imageSection');
const firstImage = document.getElementById('firstImage');
const secondimage = document.getElementById('secondImage');
const thirdimage = document.getElementById('thirdImage');

let clickNumber = 0;
let firstImageIndex = 0;
let secondImageIndex = 0;
let thirdImageIndex = 0;
let attempt = 25;

console.log(2);

function ImageFunc(name) {
    this.name = name;
    this.img = `./images/${this.name}`;
    this.shown =0;
    this.clicks = 0;
    
    ImageFunc.all.push(this);
}

ImageFunc.all = []

for (let i = 0; i < imagesArray.length; i++) {
    new ImageFunc(imagesArray[i]);
}
console.log(4);

function eventHandler(e) {
    if ((e.target.id === 'firstImage' || e.target.id === 'thirdImage' || e.target.id === 'secondImage') && clickNumber < attempt) {
        if (e.target.id === 'firstImage') {
            imageSec.all[firstImageIndex].clicks++;
            console.log(firstImageIndex);
        }
        if (e.target.id === 'secondImage') {
            imageSec.all[secondImageIndex].clicks++;
        }
        if (e.target.id === 'thirdImage') {
            imageSec.all[thirdImageIndex].clicks++;

        }
        clickNumber++;
        renderImg();
    } else {
        console.log(ImageFunc.all);
    }
}

console.log(5);

function renderImg() {
    let firstIndex = RandomNumber(0, imagesArray.length - 1);
    let secondIndex;
    let thirdtIndex;

    do {
        firstIndex = RandomNumber(0, imagesArray.length - 1);
        secondIndex = RandomNumber(0, imagesArray.length - 1);
        thirdtIndex = RandomNumber(0, imagesArray.length - 1);
    } while (firstIndex === secondIndex || firstIndex === thirdtIndex || secondIndex === thirdtIndex);
    
    firstImageIndex = firstIndex;
    secondImageIndex = secondIndex;
    thirdImageIndex = thirdtIndex;

    firstImage.src = ImageFunc.all[firstIndex].img;
    secondimage.src = ImageFunc.all[secondIndex].img;
    thirdimage.src = ImageFunc.all[thirdtIndex].img;

    ImageFunc.all[firstIndex].shown++;
    ImageFunc.all[secondIndex].shown++;
    ImageFunc.all[thirdtIndex].shown++;
}
console.log(6);

imageSec.addEventListener('click', eventHandler);

function RandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(7);

renderImg();