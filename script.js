console.log("running");
let buttons = document.querySelectorAll("button");
let inputBox = document.querySelector("input");
let string = "";
let arrayBtns = Array.from(buttons);
buttons.forEach(function(btns){
   btns.addEventListener("click", function(e){
      if(e.target.innerHTML == "="){
         string = eval(string);
         inputBox.value = string;
      }else if(e.target.innerHTML == "AC"){
         string = "";
         inputBox.value = string;
      }else if(e.target.innerHTML == "DEL"){
         string = string.substring(0, string.length-1); 
         inputBox.value = string;
      }else{
         string += e.target.innerHTML;
         inputBox.value = string;
      }
   });
});