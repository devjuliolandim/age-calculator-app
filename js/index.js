function showResults(){
    
    const DAY = document.querySelector("#day").value;
    const MONTH = document.querySelector("#month").value;
    const YEAR = document.querySelector("#year").value;

    const INPUTS = Array.from(document.querySelectorAll('input'));
    const LABELS = Array.from(document.querySelectorAll('.input-upper-text'));
    const FILL = Array.from(document.querySelectorAll('.fill-forget'));

    

    areThoseFilled(INPUTS, LABELS, FILL);

    areThoseValid(DAY, MONTH, YEAR);
    
}

function areThoseFilled(inputs, labels, fill) {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].classList.add('wrong-border');
            labels[i].classList.add('wrong');
            fill[i].textContent = "Don't forget to fill this info";
        } else {
            inputs[i].classList.remove('wrong-border');
            labels[i].classList.remove('wrong');
            fill[i].textContent = "";
        }
    }
}

function areThoseValid(day, month, year){
    
    var currentYear = new Date().getFullYear;


    if(day <= 0 || day >=31 || month <= 0 || month>12 || year<1900 || year>= currentYear){
        
    }
}