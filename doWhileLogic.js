var numeroEntrada=0, factorial=1, opcion;
do {
    opcion=parseInt(prompt("Elija la opción que desea realizar: 1: Cálcular Factorial   2. Determinar si es par  3.Si desea salir"));
    switch (opcion) {
        case 1:
            numeroEntrada=parseInt(prompt("Ingrese el número al que le desea cálcular el factorial"));
            for (let i = 1; i <= numeroEntrada; i++) {
                factorial=factorial*i;
                
            }
            alert(factorial + " es el factorial de " +numeroEntrada);
            break;
        case 2:
             numeroEntrada=parseInt(prompt("Ingrese el número que quiere verificar si es par"));
             if ((numeroEntrada%2)==0) {
                alert(numeroEntrada + " es par");
             } else {
                alert(numeroEntrada + " es impar");
             }
            break;
    
        
    }
    
} while (opcion != 3);