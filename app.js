let timer=document.getElementById("timer");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let startTime;

let elapsedTime=0;

let timerId=null;

let timeToadd=0;

let audio=new
Audio("syouri.mp3");
let img=document.getElementById("imarge-place");
let orei=document.getElementById("setuo");

const updateTimeText= () =>{
        
    

    let s=Math.floor(elapsedTime%60000/1000);

    let ms=elapsedTime%1000;


    
    s=("0"+s).slice(-2);
    ms=("0"+ms).slice(-3);
    

    timer.textContent=s+":"+ms;
    

}

const countUp=()=>{
    timerId=setTimeout(function(){

        elapsedTime=Date.now()-startTime+timeToadd;
        updateTimeText()
        countUp();
        
    },10);
}
    
start.addEventListener("click",function(){
    //startを連続で押してインターバルが何個もセットされるのを回避
    if(timerId!=null){return;}
    startTime=Date.now();

    countUp();
});

stop.addEventListener("click",function(){
    clearTimeout(timerId);
    timeToadd+=Date.now() - startTime;
    console.log(timeToadd);
    if(5000<=timeToadd&&timeToadd<=5050){
        img.src="kaityou2.png";
        audio.play();
        alert("会長「おめでとう、君は私の誇りだ。」");
        orei.innerHTML="本当にありがとう！お陰で会長の機嫌がよくなったよ(^^)<br>またやりたくなったら再読みでもしてね[F5]";
    }else{
        alert("会長「失格！今、よそ見していただろ！」");
    }
    timerId=null;
    
});

reset.addEventListener("click",function(){

    elapsedTime=0;

    timeToadd=0;

    updateTimeText();    
});

