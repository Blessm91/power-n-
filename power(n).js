// Recursive power function (similar to leetcode style)
const power = (x, n) => n === 0 ? 1 : n % 2 === 0 ? power(x, n/2) ** 2 : x * power(x, n-1);

// Input handling with minimal code
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = () => {
    rl.question("x: ", x => {
        if (isNaN(x = parseFloat(x))) {
            console.log("Invalid x");
            return getInput();
        }
        rl.question("n: ", n => {
            if (!Number.isInteger(n = +n) || n < 0) {
                console.log("Invalid n");
                return getInput();
            }
            console.log(`${x}^${n} = ${power(x, n).toFixed(4)}`);
            rl.question("Again? (y/n): ", a => a.toLowerCase()[0] === 'y' ? getInput() : rl.close());
        });
    });
};

getInput();
