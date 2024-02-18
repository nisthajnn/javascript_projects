const clock=document.querySelector('.clock')


setInterval(function(){
    const date=new Date();
    const d=(date.toLocaleTimeString());
    clock.innerHTML=d;
},1000)