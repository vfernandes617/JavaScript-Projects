// This script changes the text of the paragraph with id "p1" after a delay of 2 seconds

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var p1 = document.getElementById("p1");
        if (p1) {
            p1.textContent = "Hello Async World";
        }
    }, 2000);
});
