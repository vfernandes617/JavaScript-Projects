//type of operator//
document.write(typeof "CAR");
//type of operator for number
document.write(typeof 3)
// type coercion//
document.write("10"+5);
document.write(2E310);
document.write(-3E310);
document.getElementById("test").innerHTML=isNaN('This is a string');
//Boolean logic for true or false//
document.write(10>2);
//the output for false looks like this//
document.write(10<2);
//console.log() method//
console.log(2+2);
//double equal signs, you would use this to show a comparsion ==//
document.write(10==10);
// a false equal would look like this//\
document.write(2==30);
//triple equal signs is used to shwo that a comparison should be made//
x=12;
y=12;
document.write(x===y);
//to demonstrate a false//
u="nine"
i="eight"
document.write(u===i);

//logical operators//
//the && operator//
document.write(5>2&&10>4);
// to show a false statement we would write//
document.write(2>5&&20<12);
//the || operator works this way//
document.write(5>10||10>20);
//Not operator//
function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
};
// a double negative not operator//
function not_Function () {
    document.getElementById("Not").innerhtml=!(5>10);
}