// factorial de 10 - bucle WHiLE con bifurcacion y sentencia break
let n = 10;
let i = 1;

factorial: while (true) {
    n *= i;
    i++;
    if (i === 10 ) {
        break factorial;
    };
};

console.log(n);