console.log('Loaded!');
var marginRight=0;
function moveRight(){
    marginRight=mirginRight+1;
    movimg.style.marginRight=marginRight+px;
}
var element = get.ElementById('movimg');
element.onclick = function(){
    var interval=setinterval(moveRight,100);
};