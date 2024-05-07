function showResults(){
    
    const DAY = document.querySelector("#day").value;
    const MONTH = document.querySelector("#month").value;
    const YEAR = document.querySelector("#year").value;

    const INPUTS = Array.from(document.querySelectorAll('input'));
    const LABELS = Array.from(document.querySelectorAll('.input-upper-text'));
    const FILL_MESSAGE = Array.from(document.querySelectorAll('.fill-forget'));

    

    

    if(areThoseFilled(INPUTS,LABELS,FILL_MESSAGE)){
        areThoseValid(DAY,MONTH,YEAR)
    }
    
}

function areThoseFilled(inputs, labels, fillMessage) {

    var count = 0;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].classList.add('wrong-border');
            labels[i].classList.add('wrong');
            fillMessage[i].textContent = "Don't forget to fill this info";
           
        } else {
            inputs[i].classList.remove('wrong-border');
            labels[i].classList.remove('wrong');
            fillMessage[i].textContent = ""; 
            count++;
        }
    }

    if(count == inputs.length){
        return true;
    }else{
        return false;
    }
}

function areThoseValid(day, month, year){
    
    var currentYear = new Date().getFullYear;


    if(day <= 0 || day >=31 || month <= 0 || month>12 || year<1900 || year>= currentYear){
        alert('fuck');
    }
}

function error(inputs, labels, fillMessage){

}