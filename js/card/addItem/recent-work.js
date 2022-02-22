let recentWorkContent=document.querySelector(".recent-work .content-work .scroll-x");

targetDay=0;
targetMonth=0;

window.addEventListener("load", function(){
    const t=new Date();
    targetMonth=t.getUTCMonth();
    targetDay=t.getUTCDate();

    recentWorkData.forEach((ele,i)=>{
        body='';
        ele.International_days.forEach((ele1) => {
            if (targetMonth>i){
                body+=`
                <li style='text-decoration:line-through'>
                    <table>
                        <tr>
                            <td class='day-date'>${ele1['date']}</td>
                            <td>${ele1['name']}</td>
                        </tr>
                    </table>
                </li>`;
            }else if(i==9){
                body+=`<li style=''><h5>${ele1['name']}</h5></li>`;
            }else{
                if (targetDay>ele1['date'] && i==targetMonth){
                    body+=`<li style='text-decoration:line-through;'>
                        <table>
                            <tr>
                                <td>${ele1['date']}</td>
                                <td>${ele1['name']}</td>
                            </tr>
                        </table>
                    </li>`;
                }else{
                    if (targetDay===ele1['date']){
                        body+=`<li style='color:#65473D;font-weight:600'>
                        <table>
                            <tr>
                                <td>${ele1['date']}</td>
                                <td>${ele1['name']}</td>
                            </tr>
                        </table>
                        </li>`;
                    }else{
                        body+=`<li>
                        <table>
                            <tr>
                                <td>${ele1['date']}</td>
                                <td>${ele1['name']}</td>
                            </tr>
                        </table>
                        </li>`;
                    }
                }
            }
        });
        
        if (targetMonth>ele.id){
            recentWorkContent.innerHTML+=`
            <div class="item">
            <h2>${ele.month}</h2>
            <ul>${body}</ul>
            </div>`;
        }else{
            recentWorkContent.innerHTML+=`
            <div class="item">
                <h2>${ele.month}</h2>
                <ul>${body}</ul>
            </div>`;
        }
        
    });
});

