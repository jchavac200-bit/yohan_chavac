let button=document.getElementById("button")
let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let cantidad=document.getElementById("cantidad")
let numero1
let numero2

button.addEventListener("click" ,funcion)

function funcion(){

    numero1=Number(input1.value)
    numero2=Number(input2.value)
     
   let resultado=numero1+numero2

    cantidad.textContent=(resultado)

}
