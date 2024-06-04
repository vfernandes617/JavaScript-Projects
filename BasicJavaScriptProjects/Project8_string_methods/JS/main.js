//Concat() Method//
function full_Sentence() {
    var part_1="I have";
    var part_2="made this";
    var part_3="into a complete";
    var part_4="sentence";
    var whole_sentence=part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}
//slice method//
function slice_Method() {
    var Sentence="All work and no play makes Johnny a dull boy.";
    var Section=Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}
//to show number methods that assist you in working with numbers. this string will return "182"//
function string_Method() {
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}
//the toPrecision() method formats a number to a specfied length.//
function precision_Method() {
    var Y=12938.3012987376112;
    document.getElementById("Precision").innerHTML=Y.toPrecision(10);
}