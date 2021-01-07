 //Declare Array Of color
 const primaryColors = ["red","yellow","blue"];
 const secondaryColors = ["pink","brown","purple","thistle","green","Maroon","orange","teal","black","turquoise"];
 const buttons = document.querySelector ('.buttons');
 const display = document.querySelector('.box2');
 const reset = document.querySelector('.reset')


 //add eventListener...
 buttons.addEventListener("click", function(event){
    // console.log(event.target.innerText);
    if (event.target.classList.contains("square")) {
        const value = parseInt(event.target.innerText);
        if(value%2 == 0) {
            display.style.backgroundColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
        } else {
            display.style.backgroundColor = secondaryColors[Math.floor(Math.random() * secondaryColors.length)];
        }
    }
    
    reset.addEventListener("click",function(){
        display.style.backgroundColor= 'white';
    })
  
    
 })