
// function to to demonstrate the addition operation//
function addition_Function () {
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2="+addition;
    function handleClick1 () {
        alert('Button 1 clicked');}
}
// function to to demonstrate the subtraction operation//
function subtraction_Function() {
    var Subtraction=5-2;
    document.getElementById("Mathminus").innerHTML="5-2="+Subtraction;
    function handleClick2 () {
        alert('Button 2 clicked'); 
}
}
// function to to demonstrate the multiplication operation//
function multiplication() {
    var simple_Math=6*6;
    document.getElementById("Mathmulti").innerHTML="6x6="+simple_Math;
    function handleClick3 () {
        alert('Button 3 clicked');}
}
// function to to demonstrate the division operation//
function division() {
    var simple_Math= 81/9;
    document.getElementById("Mathdiv").innerHTML="81/9="+simple_Math;
    function handleClick4 () {
        alert('Button 4 clicked');}
}
// function to to demonstrate the more math operation//
function more_Math() {
 document.getElementById("MathMore").innerHTML="1 plus 2, mulitplied by 10 divided in half and then subtractred by 5 equals"+simple_Math;
 function handleClick5 () {
    alert('Button 5 clicked');}
 }

// function to to demonstrate the Modulus operator//
function modulus_Operator() {
    var simple_Math=25%6;
    document.getElementById("Mathmodulus").innerHTML="When you divide 25 by 6 you have a remainder of:"+simple_Math;
    function handleClick6 () {
        alert('Button 6 clicked');}
    }

// function to to demonstrate the negation operator//
function negation_Operator () {
    var x=10;
    document.getElementById("Math negation").innerHTML=-x;
        alert('Button 7 clicked');
    }
// assigning x and y with variables//

function handleClick8 () {
    alert('Button 8 clicked');
var x=5;
x++;
document.write(x);
}

function handleClick9() {
    alert('Button 9 clicked');
var y=5
y--;
document.write(y);
}
//to show a random number from 0-1 in the alert//
window.alert(Math.random());
// Adding event listeners to the buttons
document.getElementById('button1').addEventListener('click',addition_Function);
document.getElementById('button2').addEventListener('click',subtraction_Function);
document.getElementById('button3').addEventListener('click',multiplication);
document.getElementById('button4').addEventListener('click',division);
document.getElementById('button5').addEventListener('click',more_Math);
document.getElementById('button6').addEventListener('click',modulus_Operator);
document.getElementById('button7').addEventListener('click',negation_Operator);
document.getElementById('button8').addEventListener('click',handleClick8);
document.getElementById('button9').addEventListener('click',handleClick9);
