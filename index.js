function imageGallery(currentImg){
    var clickedImage = currentImg.src;
    var clickedTitle = currentImg.title;
    document.body.style.backgroundImage = `url(${clickedImage})`;
    document.getElementById("image-title").innerText = clickedTitle;
}