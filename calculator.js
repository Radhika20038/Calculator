function display(value){
    document.getElementById("result").value += value;
}

function Del(){
    document.forms.answer.value = document.form.answer.value.substr(0,form.answer.value)
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function giveAns(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}