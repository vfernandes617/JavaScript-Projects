
    function assignAndDisplay() {
        let var1 = "Super";
        let var2 = "Hero";
        let combined =var1+""+var2;
        document.getElementById("main-headline").innerText=combined;
    }
    assignAndDisplay();

    function myFunction() {
    var sentence="I am learning";
    sentence+="a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
    }