console.log('Loaded!');

var marginRight=0;
function moveRight(){
    marginRight=mirginRight+1;
    movimg.style.marginRight=marginRight+px;
}
var element = document.getElementById('movimg');
element.onclick = function(){
    var interval = setInterval(moveRight,100);
};

// fitness

var x = document.getElementById("img0");
x.setAttribute("src", "first-pic.jpg");


     var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsById("img1");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
