let h1 = document.querySelector("h1");


function makeTea(step , delay , nextStep){
setTimeout(()=>{
    h1.innerText = step;
    if(nextStep) nextStep();
}, delay)};


makeTea("Boil water", 1500, ()=>{
    makeTea("Add Sugar and Tea Leaves", 1500, ()=>{
        makeTea("Now Add milk and boil", 1500 ,()=>{
            makeTea("Ready! Now serve it", 1500);
        });
    })
});
