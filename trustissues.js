//trust issues with settimeout

console.log("start");

setTimeout(function cb() {
    console.log("callback");

},5000);

console.log("end");

//suppose we have million lines of code and took lot of time to run suppose takes 10 sec to execute
//in thi scase globa; execution comtext will be busy for 10 sec and callback function will be waiting in callback queue for 10 sec

//even we set timeout for 5 sec but stil it will took 10 sec to execute

//dont block your main thread 
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log("end1");
