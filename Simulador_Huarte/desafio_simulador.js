/* 
SIMULADOR DE COMPRA 

-Mi simulador le pide al usuario ingresar la cantidad de artículos que va a comprar, si el valor es cero manda la alerta "ingresó un campo no valido" y pregunta si quieres hacer una nueva compra, si el valor es mayor a 2 comienza a pedir el precio del articulo 1, 2 ,3... según el numero de artículos que el usuario dijo que iba a comprar.

-Si dentro del primer valor del precio del artículo se ingresa el valor "0", se envía la alerta "ingresó un campo no valido" y pregunta si quieres hacer otra compra. 
En los siguientes 2 casos se comienzan a sumar los artículos y se muestra el subtotal, el costo del IVA y el total incluyendo IVA:
 1. Si el usuario ingresa todos los precios de los artículos correctamente
 2. Si se ingresa un precio valido en el primer artículo, comienza la suma de todos los artÍculos, si en alguno de ellos se ingresa "0" se corta la suma y se muestra el total

-Después de mostrar el subtotal, el costo del IVA y el total incluyendo IVA, le pregunta al usuario si desea pagar a meses sin intereses (y/n), si el usuario ingresa que no "n" le pregunta si quiere hacer otra compra, si el usuario ingresa si (y) le pregunta en cuantos meses desea pagar 
 
-En esa misma alerta se indica que la promoción de meses intereses es de 3, 6, 9, 12, 18 y 24, si el usuario ingresa otra cantidad se manda la alerta "ingresó un campo no valido", si el usuario ingresa cualquiera de las meses validos de la promoción, le devolverá la alerta con la cantidad que deberá pagar al mes.

-Finalmente pregunta al usuario si desea hacer otra compra (y/n) si ingresa "y" comienza de nuevo, si ingresa "n" sale del programa


*/

while (true) {
  let subtotal = 0;
  let total = 0;
  let impuesto = 0.16;
  let pagos = 0;
  let cantidad = 0;
  let msi = 0;
  let articulo =1;
  let sumando =0;

    do {
      let articulos = prompt("Ingrese el número de artículos de su compra: ");
      if(articulos <=0) break;
        for (let suma = 0; suma < articulos; suma++) {
        sumando = prompt("Ingrese el costo del artículo: " + articulo++);
        subtotal = parseFloat(subtotal) + parseFloat(sumando); 
        total = subtotal * impuesto + subtotal;
        if(sumando <=0) break;
        }
      if(total > 0)
      alert("El subtotal es : " + parseFloat(subtotal) + "   El iva es " + (subtotal * impuesto) + "   El total es " + (total));
      if(total <= 0) break;
      if(total > 0);
      msi = prompt("¿Desea diferir su pago a meses sin intereses? (y/n) ");
      if (msi != "y") break;
      alert (cantidad = prompt("¿En cuantos meses desea pagar? la promoción es de 3, 6, 12, 18 o 24 meses"));
      function dividir (total, cantidad) {
        return total / cantidad
      }
      function calculadora (total, cantidad, cantidad) {
      switch (cantidad) {
        case "3":
         return dividir (total, cantidad)
        case "6":
          return dividir (total, cantidad)
        case "9":
          return dividir (total, cantidad)
        case "12":
          return dividir (total, cantidad)
        case "18":
          return dividir (total, cantidad)
        case "24":
          return dividir (total, cantidad)
        default:
          return alert("Ingresó un campo no valido ");
      }
    }
    const result = calculadora (total, cantidad, cantidad)
    if(result > 0)alert("Su pago mensual es de: " + result);
  }
    while (!total)
    if(subtotal <= 0) alert("Ingresó un campo no valido");
    console.log ("Se acabo la operación");
    const seguir = prompt ("Desea hacer otra compra? (y/n)").toLowerCase();
    if (seguir != "y") break
    }


