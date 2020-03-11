function subtract(){
    let num1 = document.getElementById("Fnumber").value;
    let num2 = document.getElementById("Snumber").value;
    document.getElementById("result").innerHTML = (num1 - num2);
}
function multiply(){
    let num1 = document.getElementById("Fnumber").value;
    let num2 = document.getElementById("Snumber").value;
    document.getElementById("result").innerHTML = (num1 * num2);
}
function divide(){
    let num1 = document.getElementById("Fnumber").value;
    let num2 = document.getElementById("Snumber").value;
    document.getElementById("result").innerHTML = (num1 / num2);
}
function add(){
    let num1 = document.getElementById("Fnumber").value;
    let num2 = document.getElementById("Snumber").value;
    document.getElementById("result").innerHTML = (+num1 + +num2);
}
const btn = document.getElementById("btn");
btn.addEventListener('click', (e)=>{e.preventDefault(); });