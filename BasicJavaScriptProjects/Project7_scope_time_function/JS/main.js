 //Global variable//
    var X=10;
    function Add_numbers_1() {
        document.write(20 + X +"<br>");
    }
    function Add_numbers_2() {
        document.write(X+100);
    }
    Add_numbers_1();
    Add_numbers_2();
    // this code should return "30" and "110"//

    //example of a local variable//
    function Add_numbers_1() {
        var Y=10;
        document.write(20+Y+"<br>");
    }
    function Add_numbers_2() {
        console.log()(Y+100);
    }
    Add_numbers_1();
    Add_numbers_2();
    //this code would only return 30 because the variable was local//

    //if statements//
    function get_Date() {
        if (new Date().getHours()<19){
            document.getElementById("Greeting").innerHTML="How are you today";
        }
    }
    //my own if statement//
    function Check_Age(){
    let Age=25;
    if (Age>=18){
        old="you are old";
        console.log("you are an adult");
    Age=document.getElementById("Age").value;
    document.getElementById("Age").innerHTML=Check_Age+"you are an Adult";
    }
    else{
        old="You are still young! but still old!";
    }   
    document.getElementById("How_old_are_you?").innerHTML=old;
}
// testing an else if statment//
function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if (Time>=12==Time<18) {
        Reply="It is afternon.";
    }
    else {
        Reply="It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}
