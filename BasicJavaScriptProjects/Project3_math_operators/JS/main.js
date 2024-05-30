
// function to to demonstrate the addition operation//
function addition_Function () {
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2="+addition;
}
// function to to demonstrate the subtraction operation//
function subtraction_Function() {
    var Subtraction=5-2;
    document.getElementById("Mathminus").innerHTML="5-2="+Subtraction;
}
// function to to demonstrate the multiplication operation//
function multiplication() {
    var simple_Math=6*6;
    document.getElementById("Mathmulti").innerHTML="6x6="+simple_Math;
}
// function to to demonstrate the division operation//
function division() {
    var simple_Math= 81/9;
    document.getElementById("Mathdiv").innerHTML="81/9="+simple_Math;
}
// function to to demonstrate the more math operation//
function more_Math() {
 document.getElementById("Math").innerHTML="1 plus 2, mulitplied by 10 divided in half and then subtractred by 5 equals" +simple_Math;
}
// function to to demonstrate the Modulus operator//
function modulus_Operator() {
    var simple_Math=25%6;
    document.getElementById("Mathmodulus").innerHTML="When you divide 25 by 6 you have a remainder of:" +simple_Math;
}
// function to to demonstrate the negation operator//
function negation_Operator() {
    var x=10;
    document.getElementById("Math").innerHTML=-x;
}
// assigning x and y with variables//
var x=5;
x++;
document.write(x);
var y=5
y--;
document.write(y);
//to show a random number from 0-1 in the alert//
window.alert(Math.random());