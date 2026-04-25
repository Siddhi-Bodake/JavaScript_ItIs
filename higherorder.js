//function takes another funcions as aparameetr or return anither funtion is called higher order funvtion

function x(){
    console.log("namaste");
    
}
function y(x){
    x();
}
y(x);


const radius = [3,1,2,4];

const calculateArea = function (radius){
    const output = [];
    for(let i =0 ; i<radius.length; i++){
        output.push(Math.PI * radius[i]*radius[i])
    }
    return output;
}

console.log(calculateArea(radius));