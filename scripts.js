function miFuncion(){
   var num1 = parseFloat(prompt("dame un numero se us plau:"));
     
   var num2 = parseFloat(prompt("dame un numero se us plau:"));
    
    valorS = num1 + num2;
    valorR  = num1 - num2;
    valorM  = num1 * num2;
    valorD = num1 / num2;
    // let mensaje = document.getElementById("cajaTexto").value;//Recoger valor de un input text
    // document.getElementById("mostrarDatos").innerHTML =  result;//Dar valor por ejemplo a un párrafo
   document.getElementById("mostrarDatos").innerHTML = "El resultat de la suma és: " + valorS + "<br> el resultat de la resta és: " + valorR +  "<br> el resultat de la multiplicació és: " + valorM + "<br>el resultat de la divisió és: " + valorD
    window.alert("El resultat de la suma és: " + valorS + ", el resultat de la resta és: " + valorR + " el resultat de la multiplicació és: " + valorM + "el resultat de la divisió és: " + valorD)
    console.log(valorS, valorR, valorM, valorD )
}
