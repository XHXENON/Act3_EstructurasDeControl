//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let one=1;
let i=2;
blucleFactorial: while(true){
    one *=i;
    i++;
    if(i>10){
        break blucleFactorial;
    }
}
console.log(one);