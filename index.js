


var plus = document.querySelectorAll('.plus');
console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', inc);
}

function inc (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    console.log(count);
    count++;
    div.querySelector('p').innerHTML = count;
    var unit=Number(div.parentElement.parentElement.querySelector(".unitPrice").innerHTML)
    
    var pri=unit * count ;
    div.parentElement.parentElement.querySelector(".price").innerHTML=pri
    console.log(pri)
    som()
}

var minu = document.querySelectorAll('.minus');
console.log(plus);

for (let i = 0; i < minu.length; i++) {
    minu[i].addEventListener('click', dec);
}

function dec (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    console.log(count);
    if (count>0){
    count--;
    div.querySelector('p').innerHTML = count;
    }
    var unit=Number(div.parentElement.parentElement.querySelector(".unitPrice").innerHTML)
    var pri=unit * count ;
    div.parentElement.parentElement.querySelector(".price").innerHTML=pri
    som()
}

var pri2=document.querySelectorAll('.price')
console.log(pri2)
function som() {
    var total=0
    for (let i = 0; i < pri2.length; i++) {
        total+=Number(pri2[i].innerHTML);
        document.getElementById("total").innerHTML=total;
        console.log(total)
    }
}

var likes=document.getElementsByClassName('like')

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click",color)}


    function color(e) {
        var cible=e.target
        console.log(cible)
    
    if (cible.style.color=="red") {
        cible.style.color="#424242"
    }else{
        cible.style.color="red"
    }
}
    var del=document.querySelectorAll('.delete');

    for (let i = 0; i < del.length; i++) {
        del [i].addEventListener('click', dell);
    }
    function dell(e) {
        var cible=e.target;
        var tr=cible.parentElement.parentElement.parentElement.parentElement;
        tr.querySelector('.price').innerHTML=0;
        som();
        tr.remove();
    }


