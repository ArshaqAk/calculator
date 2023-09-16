function displayNum(num){
    result.value+=num;
}



function clearNum(){
    result.value=''
}

function evaluateNum(){
result.value=eval(result.value);
}

function back(){
    result.value=result.value.slice(0,-1);
}