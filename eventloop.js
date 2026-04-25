//event loop
console.log("start");

setTimeout(function cb() {
    console.log("callback");
}, 5000);

console.log("end");


console.log("start");
document.getElementById("btn").addEventListener("click", function cb() {
    console.log("callback");
})
console.log("end");

//add eventlistener is superpowe which is DOM api of the browser
//event loop has one job is t like continuosly monitpr callbacka nd callback queue 
//if call stack is empty then it will push callback from callback queue to call stack
//we need callbck queue beacuse lcik on button on multipe time s and 5-6 callback function waiting in callback queue and event loop monitpr it 


//fetch 

console.log("start");
setTimeout(function cbT() {
    console.log("callback");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/posts").then(function cbF() {
    console.log("cb");
});

console.log("end");

//this fetch callback fuction dont go in the callback queue 
//its goes to microtask queue nut have the higher priority than callback queue
//suppose we have mllions of lines of code and  in main thread and at same time timer is also done .so both microstack and callback queue and at the ened when callstac is emplty then it will complte the microstask and callback queue


//what can come in microtask all the callback function comes from promises and mutation observer goes in microtask .

//stravation in callbackque i when microtask queue creates or keep creating the the other microtask is called starvation.