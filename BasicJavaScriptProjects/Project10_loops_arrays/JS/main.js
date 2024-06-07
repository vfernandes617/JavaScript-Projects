function count_To_Ten() {
    var Digit="";
    var X=1;
    while (X<11) {
        Digit+="<br>" +X;
        X++;
    }
document.getElementById("Counting_To_Ten").innerHTML=Digit;
}

//loop function//
 var Intruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"]
 var Content="";
 function for_Loop() {
    for (Y=0; Y<Instruments.length;Y++){
        Content+=Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
 }
 //array function//
 function array_Function() {
    var Fast_Food_Menu=[];
    Fast_Food_Menu[0]="Cheeseburger";
    Fast_Food_Menu[1]="Milk Shake";
    Fast_Food_Menu[2]="Caprese Melt";
    Fast_Food_Menu[4]="Array";
    document.getElementById("Array").innerHTML= "Your order is" +
        Fast_Food_Menu[3]+".";
 }
//const Keyword assignment//
function constant_function() {
    const Game_Console={hardware:"Playstation 5", brand:"Sony", color:"white"};
    Game_Console.color="black";
    Game_Console.price="$500";
    document.getElementById("Constant").innerHTML="The cost of the"+
    Game_Console.hardware+"was"+Game_Console.price;
}
//let assignment//
var Q=23;
document.write("Q");
{
    let Q=55;
    document.write("<br>"+Q);
}
document.write("<br>"+Q);
//example of a return fucntion//
function multiply(a,b){
    let product=a*b;
    return product;
    let result=multiply(5,3);
}
//Objects//
let plane={
    make:"Boeing",
    model:"777",
    year:"2020",
    color:"silver",
    description:function() {
        return "The plane is a "+ this.year+this.color+this.make+this.model;
    }
};
document.getElementById("Plane_Object").innerHTML=plane.description();
//example of a break statement//
for (let i=0;i<10;i++) {
    if (i==5) {
        break;
    }
    document.write("i");
}
//for loop function//
const cars=["BMW","Volvo","Honda","Chevy"];
let i, len, text;
for (i=0, len=cars.length,text="";i<len;i++){
    text+=cars[i]+"<br>";
}
document.getElementById("For_loop").innerHTML=text;