function showResults(){
    
    const DAY = parseInt(document.querySelector("#day").value);
    const MONTH = parseInt(document.querySelector("#month").value);
    const YEAR = parseInt(document.querySelector("#day").value);

    areThoseValid(DAY, MONTH, YEAR);
    
}

function areThoseValid(day, month, year){

    var currentYear = new Date().getFullYear;

    if(day <= 0 || day >=31 || month <= 0 || month>12 || year<1900 || year>= currentYear){
        
    }
}