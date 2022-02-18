let footer=document.querySelector('.footer');
let footerContent=document.querySelector('.footer-content');
let aboutDesc=document.querySelector('.about-desc');
let state=0;
footer.addEventListener("click",function(){
    if (state==0){
        state=1;
        windowWidth=window.innerWidth;
        if (windowWidth>=500){
            footer.style.height="800px";
        }else{
            footer.style.height=aboutDesc.clientHeight*1.8+"px";
        }
        aboutDesc.style.visibility="visible";
        aboutDesc.style.opacity="1";
        setTimeout(() => {
            footer.style.cursor="initial";
            footer.style.alignItems="center";
            if (windowWidth>=768){
                window.scrollTo(0,1200);
            }else{
                window.scrollTo(0,850);
            }
        }, 500);
    }else{
        state=0;
        window.scrollTo(0,100);
        setTimeout(() => {
            footer.style.alignItems="end";
            footer.style.height="260px";
            footerContent.style.bottom="0px";
            aboutDesc.style.visibility="hidden";
            aboutDesc.style.opacity="0";
        }, 500);
    }
})


window.addEventListener("resize",function(){
    if (state==1){
        windowWidth=window.innerWidth;
        if (windowWidth>=500){
            footer.style.height="800px";
        }else{
            footer.style.height=aboutDesc.clientHeight*1.8+"px";
        }
    }
})