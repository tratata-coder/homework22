function calc(){
    let weight = +weightInput.value;
    let height = +heightInput.value;
    if(height>2.5){
        height = height / 100;
    }
    let index = weight / (height * height);
    index = index.toFixed(1);
    resultPlace.innerHTML = index;
    if(index <= 16){
        diagnosPlace.innerHTML = "выраженный дефицит массы тела.";
    }else if(index <= 18.5){
        diagnosPlace.innerHTML = "недостаточная масса тела (дефицит).";
    }else if(index <= 25){
        diagnosPlace.innerHTML = "нормальная масса тела.";
    }else if(index <= 30){
        diagnosPlace.innerHTML = "избыточная масса тела (предожирение).";
    }else if(index <= 35){
        diagnosPlace.innerHTML ="ожирение I степени.";
    }else if(index <= 40){
        diagnosPlace.innerHTML ="ожирение II степени.";
    }else if(index >= 40){
        diagnosPlace.innerHTML ="ожирение III степени.";
    }
}