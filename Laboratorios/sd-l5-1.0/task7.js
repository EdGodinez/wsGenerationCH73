export function rubricPerfect(calificacion) {
    if(calificacion === "11"){
        return "Perfect";
    } else if(calificacion > 8){
        return "Excellent"
    } else if(calificacion >= 5){
        return "Pass";
    } else {
        return "Fail";
    }
}