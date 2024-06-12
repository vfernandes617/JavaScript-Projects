function Color_Function() {
    var Color_Output;
    var Colors=document.getElementById("Color_Input").value;
    var Color_String="is a great color!";
    switch(Colors){
                case "Red":
                 Color_Output="Red"+Color_String;
                break;
                case "Yellow":
                Color_Output="Yellow"+Color_String;
                break;
                case"Blue":
                    Color_Output="Blue"+Color_String;
                break;
                case "Green":
                    Color_Output="Green"+Color_String;
                break;
                case"Pink":
                    Color_Output="Pink"+Color_String;
                break;
                case"Purple":
                    Color_Output="Purple"+Color_String;
                break;
                default:
                    Color_Output="Please enter a color exacly as written on the above list.";
    }
    document.getElementById("Output").innerHTML=Color_Output;
}
//class element//
function Class_Element() {
    var V=document.getElementsByClassName("Click");
    V[0].innerHTML="You see that the text changed GO CELTICS!";
}
//Canvas element
const image=document.createElement("img");
image.src="IMG/rainbow.png";
document.body.appendChild(image);
var c=document.getElementById("image");
var ctx=c.getContext("2d");
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
//Gradient color challenge
const my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
//Fill Rectangle
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);

