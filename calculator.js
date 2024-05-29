
function total(user) {
    let count = document.getElementById('calculate');
    count.value += user 
}


function Clean() {
    let clear = document.getElementById('calculate');
    clear.value = '' 
}



function Del() {
    let del = document.getElementById('calculate');
    del.value = del.value.slice(0,-1) 
}


function Equal() {
    let equal = document.getElementById('calculate');
    equal.value = eval(equal.value) 
}