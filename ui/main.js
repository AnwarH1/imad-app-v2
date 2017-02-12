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