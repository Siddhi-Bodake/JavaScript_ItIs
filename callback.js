//what is callback function - async operation

setTimeout(function () {
    console.log("timer");
}, 5000);

function x() {
    console.log("x");
    y()

}
x(function y() {
    console.log("y");

});

//event listners
function attachEvenetListener() {
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("button clicked", ++count);

    });
}
attachEvenetListener();


//AJAX
