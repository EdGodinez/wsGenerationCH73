export function rubricExcellent(calificacion) {
    if(calificacion > 8){
        return "Excellent"
    } else if(calificacion >= 5){
        return "Pass";
    } else {
        return "Fail";
    }

    
}