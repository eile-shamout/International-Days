var recentWorkBox=document.querySelector(".recent-work");
var monthNameBox=document.querySelector(".month-name");


day=0;
month=0;

window.addEventListener("load", function(){
    const t=new Date();
    month=t.getUTCMonth();
    day=t.getUTCDate();
    recentWorkBox.scrollLeft=(month*268);
    tergetItem(); 
});

let posCard={
    left:0,
    x:0
};

let posMonthName={
    left:0,
    x:0
};


const mouseDown=function (){
    recentWorkBox.style.cursor="grabbing";
    recentWorkBox.addEventListener('mousemove', mouseMoveHandler);  
}

const mouseUp=function (){
    recentWorkBox.removeEventListener('mousemove', mouseMoveHandler);   
    recentWorkBox.style.cursor="grab";
    recentWorkBox.style.userSelect="none";
}
const mouseDownHandle=function (e) {
    recentWorkBox.style.scrollBehavior = "initial";
    posCard={
        left:recentWorkBox.scrollLeft,
        x:e.screenX,
    };

    posMonthName={
        left:monthNameBox.scrollLeft,
        x:e.screenX,
    };
}

const mouseMoveHandler=function(e) {
    // card
    dx=e.screenX-posCard.x;
    val=posCard.left-dx;
    recentWorkBox.scrollLeft=val;

    // month
    dx_month=e.screenX-posMonthName.x;
    month_val=posMonthName.left-dx_month/5;
    monthNameBox.scrollLeft=month_val;

}



function tergetItem(){
    var recentWorkItem=document.querySelectorAll(".content .recent-work .content-work .scroll-x .item");
    var monthNameTerget=document.querySelectorAll(".controll-box .month-name .monthContent .month-item");
    recentWorkItem[month].style.borderRadius='0';
    recentWorkItem[month].style.opacity='1';
    monthNameTerget[month].style.opacity='1';
}


recentWorkBox.addEventListener("mousedown",mouseDownHandle);
recentWorkBox.addEventListener("mousedown",mouseDown);
recentWorkBox.addEventListener("mouseup",mouseUp);





