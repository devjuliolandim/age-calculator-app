const INPUTS = Array.from(document.querySelectorAll('input'));
const LABELS = Array.from(document.querySelectorAll('.input-upper-text'));
const FILL_MESSAGE = Array.from(document.querySelectorAll('.fill-forget'));

let DAY, MONTH, YEAR, currentYear;

function showResults(){

    DAY = parseInt(document.querySelector("#day").value);
    MONTH = parseInt(document.querySelector("#month").value);
    YEAR = parseInt(document.querySelector("#year").value);
    currentYear = new Date().getFullYear();

    if(areThoseFilled() && areThoseValid()){
            var yearDiference = currentYear - YEAR;
            var totalMonth = yearDiference % 12;
            var totalDays = yearDiference % 30;

            document.querySelector("#years-result").innerHTML = yearDiference;
            document.querySelector("#months-result").innerHTML = totalMonth;
            document.querySelector("#days-result").innerHTML = totalDays;

    }
    
}

function areThoseFilled(){

    var count = 0;

    for (var i = 0; i < INPUTS.length; i++) {
        if (INPUTS[i].value === '') {
            INPUTS[i].classList.add('wrong-border');
            LABELS[i].classList.add('wrong');
            FILL_MESSAGE[i].textContent = "Don't forget to fill this info";
           
        } else {
            INPUTS[i].classList.remove('wrong-border');
            LABELS[i].classList.remove('wrong');
            FILL_MESSAGE[i].textContent = ""; 
            count++;
        }
    }

    return count === INPUTS.length;
}

function areThoseValid(){
    var count = 0;

    if(DAY <= 0 || DAY >31 ){
        addErrorConfigs(0, "day");
    }else{
        count++;
    }
    
    if(MONTH > 12 || MONTH <= 0){
        addErrorConfigs(1, "month");
    }else{
        count++;
    }
    
    if(YEAR > currentYear){
        addErrorConfigs(2, "year");
    }else if(YEAR <= 1900){
        addErrorConfigs(2, "year (>1900)");
    }else{
        count++;
    }

    return count === INPUTS.length;
}

function addErrorConfigs(index, message) {
    INPUTS[index].classList.add('wrong-border');
    LABELS[index].classList.add('wrong');
    FILL_MESSAGE[index].textContent = "Please select a valid " + message + ".";
}

function removeErrorConfigs(index){
    INPUTS[index].classList.remove('wrong-border');
    LABELS[index].classList.remove('wrong');
    FILL_MESSAGE[index].textContent = "";
}

