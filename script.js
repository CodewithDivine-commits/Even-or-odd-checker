document.addEventListener("DOMContentLoaded", function(){
    const numberInput = document.querySelector("#numberInput");
    const checkBtn = document.querySelector("#checkBtn");
    const result= document.querySelector("#result");

checkBtn.addEventListener("click", function(){
    const number = Number(numberInput.value);

    if (isNaN(number)){
        result.innerText = "please enter a valid number.";
    }else if(number % 2===0){
        result.innerText = number +" is Even.";
    }else{
        result.innerText = number + " is odd.";
    }

});
});