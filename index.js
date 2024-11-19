const toggle_btn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i ");
const droppyMenu = document.querySelector(".droppyMenu");

toggle_btn.onclick = function () {
  droppyMenu.classList.toggle("open");
  const isOPen = droppyMenu.classList.contains("open");

  toggleBtnIcon.classList = isOPen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

var imageMain = document.getElementById("imageMain");
var smallPic = document.getElementsByClassName("smallPic");

smallPic[0].onclick = function () {
  imageMain.src = smallPic[0].src;
};
smallPic[1].onclick = function () {
  imageMain.src = smallPic[1].src;
};
smallPic[2].onclick = function () {
  imageMain.src = smallPic[2].src;
};
smallPic[3].onclick = function () {
  imageMain.src = smallPic[3].src;
};

let currentIndex = 0;
const images = document.querySelectorAll("#manny .imgBx");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Initial display
showImage(currentIndex);
