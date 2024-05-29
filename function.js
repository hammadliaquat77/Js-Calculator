

function total(user){
    var total = document.getElementById("calculater");
    total.value += user
}


function equal(){
    var equal =document.getElementById("calculater");
    equal.value = eval(equal.value)
}

function delet(){
 var del = document.getElementById("calculater");
 del.value = del.value.slice(0,-1)
}


function clean(){
    var clear = document.getElementById("calculater");
    clear.value = " ";
   }