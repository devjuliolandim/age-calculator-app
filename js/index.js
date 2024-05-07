const INPUTS = Array.from(document.querySelectorAll('input'));
const LABELS = Array.from(document.querySelectorAll('.input-upper-text'));
const FILL_MESSAGE = Array.from(document.querySelectorAll('.fill-forget'));

function showResults(){

    if(areThoseFilled() && areThoseValid()){
        
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
    
    const DAY = parseInt(document.querySelector("#day").value);
    const MONTH = parseInt(document.querySelector("#month").value);
    const YEAR = parseInt(document.querySelector("#year").value);

    var currentYear = new Date().getFullYear();
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

