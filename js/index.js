{
    let imgs=document.querySelectorAll(".banner_img li");
    let pagers=document.querySelectorAll(".banner_lunbo li");
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");

    pagers.forEach(function(ele,index){
       ele.onclick=function(){
            for(var i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
       }
   });
   let n=0;
   let t=setInterval(move,3000);
   function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }
    //点击切换下一张
    next.onclick=function(){
        move();
    }
    prev.onclick=function(){
        n=n-2;
        move();
    }

}