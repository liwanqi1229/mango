var oBanner=document.getElementById("banner");    
var oImgs=document.getElementById("imgs").getElementsByTagName("img");
var timer=null;
var now=0;
function play(){
    for(var i=0; i<oImgs.length; i++){
        oImgs[i].className = ""; //图片
    }
    oImgs[now].className = "on";
    
    now++;
    if(now == oImgs.length) now = 0;
}
timer=setInterval(play, 2000);


