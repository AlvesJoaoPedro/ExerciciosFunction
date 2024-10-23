//import * as Funcao from "MyFunctions.mjs";

function Calc(n1,n2, op)
{
    switch(op)
    {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
    }
}
function AreaTriangulo(raio)
{
    const p = 3.14;
    const area = p * (raio**raio);
    return area;
}
function IsTriangulo(primeiroLado, segundoLado, terceiroLado)
{
    if(primeiroLado == 0 || segundoLado == 0 || terceiroLado == 0)
    {
        return "Não é um triângulo."
    }

    let contador;

    if(primeiroLado == segundoLado)
    {
        ++contador;
    }
    if(primeiroLado == terceiroLado)
    {
        ++contador;
    }
    if(segundoLado == terceiroLado)
    {
        ++contador;
    }
    console.log(contador);
    if(contador == 3)
    {
        return "Triângulo Equilátero!";
    }
    else if(contador == 2)
    {
        return "Triangulo Isóceles";
    } 
    else if(contador == 1)
    {
        return ("Triângulo Scalene");
    }
}
//console.log(Calc(10,5,"/"));
//console.log(AreaTriangulo(10));
console.log(IsTriangulo(10, 10, 10))
