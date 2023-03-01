one.onclick = function () { answer.innerHTML = '1'; }
two.onclick = function () { display("2"); }
three.onclick = function () { plus(2, 4); }
four.onclick = function () { erro() }
document.getElementById("five").addEventListener("click", function () { display(5) });
document.getElementById("six").addEventListener("click", function () { display(6) });

function display(i) {
    answer.innerHTML = i;
}



clear.onclick = function () {
    answer.innerHTML = '';
}

clear2.onclick = function () {
    answer.innerHTML = '';
}

function plus (a, b){
    answer.innerHTML = a+b;
}

function erro (){
    answer.innerHTML = 'ERRO';
}