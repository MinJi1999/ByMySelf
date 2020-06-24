const body = document.querySelector("body");
const IMAGE_NUM = "5";

function genRandom(){
    const randomNum = Math.floor((Math.random()*IMAGE_NUM)+1);
    return randomNum;
}

function paintImage(randomNum){
    const image = new Image();
    image.src = `images/${randomNum}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

const randomNumber = genRandom();
paintImage(randomNumber);
