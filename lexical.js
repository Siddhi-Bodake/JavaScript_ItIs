function a() {
    var b = 5;
    c();
    function c() {
        var b = 1;
        console.log(b);
    }


}
var b = 10;
a();
console.log(b);