function count_To_Ten() {
    var Digit="";
    var X=1;
    while (X<11) {
        Digit+="<br>" +X;
        X++;
    }
document.getElementById("Counting_To_Ten").innerHTML=Digit;
}
// the length property//
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length); // Output: 3
//loop function//
 var Intruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"]
 var Content="";
 function for_Loop() {
    for (Y=0; Y<Instruments.length;Y++){
        Content+=Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
 }
