const backImg = [
        "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",
        "7.jpg","8.jpg","9.jpg","10.jpg","11.jpg",
    ];
    
const button = document.querySelector(".icons .fa-solid")
    
const pickImg = backImg[Math.floor(Math.random() * backImg.length)];
const imgs = document.createElement("img");
imgs.src = `img/${pickImg}`;
document.querySelector("#image").appendChild(imgs);

function randomImage(){
    const pickImg = backImg[Math.floor(Math.random() * backImg.length)];
    imgs.src = `img/${pickImg}`;
    document.querySelector("#image").appendChild(imgs);
}

button.addEventListener("click",randomImage)