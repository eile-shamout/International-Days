var monthNameBox=document.querySelector(".month-name");
var recentWork=document.querySelector(".recent-work");

let leftControll=document.querySelectorAll('.controller')[0];
let rightontroll=document.querySelectorAll('.controller')[1];

var monthNameItem=document.querySelectorAll(".month-name .month-item");
var card=document.querySelectorAll(".content .recent-work .content-work .scroll-x .item");

// get date
const t=new Date();
month=t.getUTCMonth();
day=t.getUTCDate();

// Selecting the current month is the goal element
let targetCard=month;


window.addEventListener("load", function(){
    monthNameBox.scrollLeft=(month*50);
    monthName(targetCard);
});

window.addEventListener("resize", function(){
    monthNameBox.scrollLeft=(month*50);
});


// Setting the right-click event of the control
rightontroll.addEventListener('click',function(){
    recentWork.style.scrollBehavior = "smooth";
    recentWork.scrollLeft+=266.5;
    monthNameBox.scrollLeft+=50;
    if (targetCard<11){
        targetCard+=1;
    }
    cardTarget(targetCard);
    monthName(targetCard);
})

// Setting the left-click event of the control
leftControll.addEventListener('click',function(){
    recentWork.style.scrollBehavior = "smooth";
    recentWork.scrollLeft-=266.5;
    monthNameBox.scrollLeft-=50;
    monthNameBox.style.fontWeight = "800";
    if(targetCard>0){
        targetCard-=1;
    }
    cardTarget(targetCard);
    monthName(targetCard);
})

// Hover over the names of the months in the Navbar to set an event
monthNameItem.forEach((element,i)=> {
    
    element.addEventListener('click',function(){
        val=266.5*i;
        recentWork.style.scrollBehavior = "smooth";
        recentWork.scrollLeft=val;
        cardTarget(i);
        monthName(i);
        targetCard=i;
        monthNameBox.scrollLeft=(50*targetCard);
    })
});

// Mark the month chosen from the nav bar
function cardTarget(i){
    var card=document.querySelectorAll(".content-work .item");
    card.forEach((ele,i)=>{
        if (i!=9){
            ele.style.opacity='0.6';
        }
        ele.style.borderRadius='10px';
        if (i<month){
            ele.style.opacity='0.3';
        }
    })
    card[i].style.opacity='1';
    card[i].style.borderRadius='0';
}

// Highlight the name of the month clicked
function monthName(i){
    monthNameItem.forEach(ele=>{
        ele.style.fontWeight = "initial";
        ele.style.opacity = "0.2";
    })
    monthNameItem[i].style.fontWeight = "700";
    monthNameItem[i].style.opacity = "1";
}



