
// counter Program decreaceBTN increaseBTN reset

const decreaceBTN = document.getElementById("decreaceBTN");
const reset =document.getElementById("reset");
const increaseBTN =document.getElementById("increaseBTN");
const countlabel =document.getElementById("countlabel");

let count= 0;

increaseBTN.onclick = function(){
    count++;
    countlabel.textContent=count;
}

decreaceBTN.onclick = function(){
    count--;
    countlabel.textContent=count;
}

reset.onclick = function(){
    count=0;
    countlabel.textContent=count;
}






















