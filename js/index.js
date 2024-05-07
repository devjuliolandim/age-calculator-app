function showResults(){
    
    const DAY = document.querySelector("#day").value;
    const MONTH = document.querySelector("#month").value;
    const YEAR = document.querySelector("#year").value;

    const INPUTS = Array.from(document.querySelectorAll('input'));
    const LABELS = Array.from(document.querySelectorAll('.input-upper-text'));
    const FILL_MESSAGE = Array.from(document.querySelectorAll('.fill-forget'));

    

    

    if(areThoseFilled(INPUTS,LABELS,FILL_MESSAGE)){
        areThoseValid(DAY,MONTH,YEAR, INPUTS, LABELS, FILL_MESSAGE)
    }
    
}

function areThoseFilled(inputs, labels, fillMessage){

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

function areThoseValid(day, month, year, inputs, labels, fillMessage){
    
    var currentYear = new Date().getFullYear;

    if(day <= 0 || day >31 ){
        addErrorConfigs(inputs, labels, fillMessage, 0, "day");
    }else{
    }
}

function addErrorConfigs(inputs, labels, fillSpan, index, message) {
    inputs[index].classList.add('wrong-border');
    labels[index].classList.add('wrong');
    fillSpan[index].textContent = "Please select a valid " + message + ".";
}

function removeErrorConfigs(inputs, labels, fillSpan,index){
    inputs[index].classList.remove('wrong-border');
    labels[index].classList.remove('wrong');
    fillSpan[index].textContent = "";
}

