console.log("nistha");
const body=document.querySelector('body');
console.log(body);
const buttons=document.querySelectorAll(".bg")
console.log(buttons);
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e)
    {
        console.log(e);
        console.log(e.target.value);
        if(e.target.id==='green')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='orange')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='black')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue')
        {
            body.style.backgroundColor=e.target.id;
        }
    });
    
}
);