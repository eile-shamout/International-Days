let footer=document.querySelector('.footer');
let footerEvent=document.querySelector('.footer .about-btn');
let footerContent=document.querySelector('.footer-content');
let aboutDesc=document.querySelector('.about-desc');
let state=0;
footerEvent.addEventListener("click",function(){
    if (state==0){
        state=1;
        windowWidth=window.innerWidth;
        if (windowWidth>=500){
            footer.style.height="800px";
        }else{
            footer.style.height=aboutDesc.clientHeight*2.2+"px";
        }
        footerContent.style.visibility="visible";
        footerContent.style.opacity="1";
        setTimeout(() => {
            footer.style.cursor="initial";
            if (windowWidth>=768){
                window.scrollTo(0,1500);
            }else{
                window.scrollTo(0,850);
            }
            footerEvent.innerHTML="Back to calender";
        }, 700);
    }else{
        state=0;
        footerContent.style.transitionDelay="0s";
        footerContent.style.visibility="hidden";
        footerContent.style.opacity="0";
        setTimeout(() => {
            window.scrollTo(0,0);
            footerEvent.innerHTML="ABOUT THE PROJECT";
            footer.style.height="140px";
        }, 400);
    }
})


window.addEventListener("resize",function(){
    if (state==1){
        windowWidth=window.innerWidth;
        if (windowWidth>=500){
            footer.style.height="800px";
        }else{
            footer.style.height=aboutDesc.clientHeight*2.2+"px";
        }
    }
})