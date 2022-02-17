let recentWorkContent=document.querySelector(".recent-work .content-work .scroll-x");

day=0;
month=0;

window.addEventListener("load", function(){
    const t=new Date();
    month=t.getUTCMonth();
    day=t.getUTCDate();

    recentWorkData.forEach((ele,i)=>{
        body='';
        ele.International_days.forEach((ele1) => {
            if (month>i){
                body+=`<li style='text-decoration:line-through'>
                    <table>
                        <tr>
                            <td>${ele1['date']}</td>
                            <td>${ele1['name']}</td>
                        </tr>
                    </table>
                </li>`;
            }else{
                if (day>ele1['date'] && i==month){
                    body+=`<li style='text-decoration:line-through;'>
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
        });
        
        if (month>ele.id){
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

