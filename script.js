// Revolving text in Title tag
let titleText = ['My Home Stickers', 'Custom Labels', 'Order Now!'];

let index = 0;
const mainTitle = document.querySelector('title');

function change() {
   mainTitle.innerHTML = titleText[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};


// Image selector for different colors
let greyBtn = document.querySelector("#greyS");
let greenBtn = document.querySelector("#greenS");
let blueBtn = document.querySelector("#blueS");

let preImage = document.querySelector("#previewImage");

greyBtn.onclick = function(){
    preImage.style.backgroundImage="url(images/previewG.png)";
}

greenBtn.onclick = function(){
    preImage.style.backgroundImage="url(images/previewGr.png)";
}

blueBtn.onclick = function(){
    preImage.style.backgroundImage="url(images/previewB.png)";
}