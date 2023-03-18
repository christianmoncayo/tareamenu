class Calculadora{
    suma(){
        // capturar valores     
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let $resp = document.getElementById("resp")
        let sumar=0
        // procesar
        sumar = num1+num2
        // asignar valores a la respuesta
        $resp.textContent=sumar
    }
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    esNumeroPerfecto(num1) {
        let suma = 0;
        for (let i = 1; i < num1; i++) {
          if (num1% i === 0) {
            suma += i;
          }
        }
        return suma === num1;
      }
    perfecto(){
        // capturar
        let d=document,acud=0
        let num1= parseInt(d.getElementById('num1').value)
        acud = this.sumaDivisores(num1)
        if (acud==num1){
            d.getElementById("resp").textContent=`${num1} es Perfecto`    
        }else{
            d.getElementById("resp").textContent=`${num1} No es Perfecto`
        }
        
    }
    amigos(){
        let d=document,acu1=0,acu2=0
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        acu1 = this.sumaDivisores(num1)
        acu2 = this.sumaDivisores(num2)
        if (acu1==acu2){
            d.getElementById("resp").textContent=`${num1} y ${num2} son Amigos`    
        }else{
            d.getElementById("resp").textContent=`${num1} y ${num2} No son Amigos`
        }
    }
    isPrimo(num){
        let acu=0,divisor=2,band=1
        while(divisor < num && band == 1){
            if (num % divisor == 0){
                // romper ciclo es cambiar el valor de la bandera
                band=0
            }else{
                divisor=divisor+1
            }
        }
        return band
    }
    primo(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        if (this.isPrimo(num1)==1){
            d.getElementById("resp").textContent=`${num1} es Primo`    
        }else{
            d.getElementById("resp").textContent=`${num1} no es Primo`
        }
    }
    primoGemelos(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let primo1=this.isPrimo(num1)
        let primo2=this.isPrimo(num2)
        if (primo1==1 && primo2==1 && Math.abs(num1-num2)==2 ){
            d.getElementById("resp").textContent=`${num1} y ${num2} son primos gemelos`    
        }else{
            d.getElementById("resp").textContent=`${num1} y ${num2} no son primos gemelos`
        }
    }
    ejercicio1(){
        let numerosInput = document.getElementById("num1");
        let resultadoP = document.getElementById("resp");
        let serie = numerosInput.value.split(";").map(valor => parseInt(valor.trim()));
        let resp = []
        let $resp=0

        
        for (let i = 0; i < serie.length; i++) {
          if (this.esNumeroPerfecto(serie[i])) {
             $resp+= serie[i];
             resp.push(serie[i])
             }
        }
        resultadoP.textContent = ` ${resp.join("+")}=${$resp}`;
    }
    ejercicio2(){
        let numerosInput = document.getElementById("num1");
        let resultadoP = document.getElementById("resp");
        let serie = numerosInput.value.split(";").map(valor => parseInt(valor.trim()));
        let resp = []
        for (let i = 0; i < serie.length; i++) {
          if (this.isPrimo(serie[i])) {
             resp.push(serie[i])
             }
        }
        resultadoP.textContent = ` ${resp.join(",")} Son Primos`;
    }
    ejercicio3(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let $resp = document.getElementById("resp")
        let mul=1
        mul=Math.pow(num1,num2) 
        $resp.textContent=`${num1} elevado a ${num2} es igual a ${mul} `
    }
    ejercicio4(){
            let numerosInput = document.getElementById("num1");
            let resultadoP = document.getElementById("resp");
            let serie = numerosInput.value.split(";").map(valor => parseInt(valor.trim()));
            let resp = [];
            for (let i = 0; i < serie.length; i++) {
              let potencia = Math.pow(serie[i], serie[i]);
              resp.push(potencia);
            }
          
            resultadoP.textContent = `${resp}`;
          }
    ejercicio5(){
        let numerosInput = parseInt(document.getElementById("num1").value);
        let $resp = document.getElementById("resp");
        let resultado=" "
        for (let i = 1; i <= 12; i++) {
            resultado+=`${numerosInput} x ${i} = ${numerosInput * i}\n`;
          }
          $resp.textContent=resultado
    }
    
    ejercicio6(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let $resp = document.getElementById("resp")
        let expo1=[]
        // procesar
        for(let pos=num2 ;pos < num1; pos++){
            if(num1 % pos == 0){
                expo1.push(pos)
            }
        }
          
        // asignar valores a la respuesta
        $resp.textContent=`los divisores son : [${expo1.join(",")}] `
    }
    sumaDivisores(numero, valorInicial) {
        let suma = 0;
        for (let i = valorInicial; i < numero; i++) {
          if (numero % i === 0) {
            suma += i;
          }
        }
        return suma;
      }
    ejercicio7(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let $resp = document.getElementById("resp")
        let expo1=this.sumaDivisores(num1,num2)
        $resp.textContent=`la suma de los divisores es : ${expo1} `
    }
inversa(num){
    let convertAndReverse = num.toString().split("").reverse().join(",");
    Array.from('convertAndReverse')
    return convertAndReverse;

}
ejercicio8(){
    let d=document
    let num1= parseInt(d.getElementById('num1').value)
    let $resp = document.getElementById("resp")
    let inversa=this.inversa(num1)
    $resp.textContent=`${num1} los numeros invertidos son [${inversa}] `
    }
    sumadigito(num){
        let sum=0
        while(num>0){
            sum=sum+(num%10)
            num=Math.trunc(num/10)
        }
         return sum
    }
    ejercicio9(){
    let $input=document.getElementById("num1")
    let numero = $input.value
    let $resp = document.getElementById("resp")
    let sum = this.sumadigito(numero)
    $resp.value=` ${numero} la suma de todos es:${sum}`
        }
pares(arreglo){
    var cv = []
    for(let pos=0;pos<=arreglo.length;pos++){
        if (arreglo[pos]%2==0){
            cv.push(arreglo[pos])
        }
    }
    return cv
}
ejercicio10(){
    let d=document
    let num1= (d.getElementById('num1').value)
    let pares1=this.pares(num1)
    d.getElementById("resp").textContent=`Los digitos pares son: [${pares1}] ` 
    }
primer(numero){
    while (numero >= 10) {
        numero /= 10;
      }
      return Math.floor(numero);
}
ejersicio11(){
    let d=document
    let num1= parseInt(d.getElementById('num1').value)
    let $resp = document.getElementById("resp")
    let primer=this.primer(num1)
    $resp.textContent=`${num1} el primer numero es : ${primer} `
}
ejercicio12(){
    let d=document
    let serie= parseInt(d.getElementById('num1').value)
    let $resp = document.getElementById("resp")
    let ultimo = serie % 10
    $resp.textContent=`${serie} el ultimo numero es : ${ultimo} `
    }
factorialnum(num){
    let facto=1
    for(let i=1;i<=num;i++){
        facto=facto*i
    }
   return facto
}
ejercicio13(){
    let d=document
    let num1=parseInt(d.getElementById('num1').value)
    let resp=this.factorialnum(num1)
    d.getElementById("resp").textContent=`El factorial es: ${resp} ` 
    }
factorialnum(num){
    let factoriales = []
    for (let i = 0; i < num.length; i++) {
        let factorial = 1
    for (let j = 2; j <= num[i]; j++) {
        factorial = factorial* j
      }
        factoriales.push(factorial)
    }
    return factoriales
}
ejercicio14(){
    let cadena = document.getElementById("num1").value
    let arreglo = cadena.split(";")
    let resp=this.factorialnum(arreglo)
    document.getElementById("resp").textContent=`El factorial de ${arreglo} es: ${resp} ` 
    }
ejercicio15 (){
    let d=document
    let num1= parseInt(d.getElementById('num1').value)
    let num2= parseInt(d.getElementById('num2').value)
    let resultado = [];
    for (let i = num1; i < num2; i++) {
      resultado.push(i);
    }
    d.getElementById("resp").textContent=`El rango es: [ ${resultado} ]`
      }
}
let cal = new Calculadora() 