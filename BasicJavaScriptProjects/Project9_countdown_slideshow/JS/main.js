function countdown() {
    var seconds=document.getElementById("seconds").value;

    function tick() {
    seconds=seconds-1;
    TimeRanges.innerHTML=seconds;
    var time=setTimeout(tick,1000);
    if(seconds==-1) {
        alert("Time's up!");
        clearTimeout(time);
        TimeRanges.innerHTML="";
    }
}
tick();
}
//the statement "setTimeout(time,1000);" meand that the program is pausing for 1,000 milliseconds//