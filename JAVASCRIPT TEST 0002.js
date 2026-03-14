let rows = 5;
let pattern = [
    [1, 4, 6, 4, 1],
    [1, 3, 3, 1],
    [1, 2, 1],
    [1, 1],
    [1]
];

for (let i = 0; i < rows; i++) {

    // Print spaces
    for (let s = 0; s < i; s++) {
        process.stdout.write(" ");
    }

    // Print numbers
    for (let j = 0; j < pattern[i].length; j++) {
        process.stdout.write(pattern[i][j] + " ");
    }

    console.log();
}