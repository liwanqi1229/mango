/* banner轮播 */
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

/* 上下轮播 */
/* var area = document.getElementById('top6');
var oLi=document.getElementsByTagName('li');
var scroll=0;
function scrollUp(){
    for(var j=0;j<oLi.length;j++){
        oLi[j].className="";
    }
        oLi[scroll].className="on";
        scroll++;
        if(scroll==oLi.length) scroll=0;
    } 
   
    var mytimer=setInterval(scrollUp,1000);
     */





