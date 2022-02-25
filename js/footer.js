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
            footer.style.height="fit-content";
        }else{
            footer.style.height="fit-content";
        }
        setTimeout(() => {
            footer.style.cursor="initial";
            if (windowWidth>=768){
                window.scrollTo(0,1500);
            }else{
                window.scrollTo(0,850);
            }
            footerEvent.innerHTML="Back to calender";
            setTimeout(() => {
                footerContent.style.visibility="visible";
                footerContent.style.opacity="1";
            }, 550);
        }, 500);
    }else{
        state=0;
        footerContent.style.visibility="hidden";
        footerContent.style.opacity="0";
        setTimeout(() => {
            window.scrollTo(0,0);            
            footerEvent.innerHTML="ABOUT THE PROJECT";
            setTimeout(() => {
                footer.style.height="130px";
            }, 550);
        }, 500);
    }
})


window.addEventListener("resize",function(){
    if (state==1){
        windowWidth=window.innerWidth;
        if (windowWidth>=500){
            footer.style.height="fit-content";
        }else{
            footer.style.height="fit-content";
        }
    }
})