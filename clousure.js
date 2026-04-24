function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const myFunc = outer();

myFunc(); // 1
myFunc(); // 2
myFunc(); // 3