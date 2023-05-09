let altura = document.querySelector(".altura")
let peso = document.querySelector(".peso")
let resultadoImc = document.querySelector("#imc")

let botao = document.querySelector("button")

botao.addEventListener("click" , ()=>{
    let calculo = peso.value/(altura.value*altura.value)
    console.log(calculo)
    resultadoImc.value = calculo.toFixed(2)
   

   
})

