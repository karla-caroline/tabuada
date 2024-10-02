var multiplicador = document.getElementById("texto");
var resultado = document.getElementById("resultados");
console.log(multiplicador);
multiplicador.addEventListener("change", function () {
    var linhas = document.querySelectorAll('#resultados p')  
    console.log(linhas.length) 
    if (linhas.length !=0){
        for (let index = 0; index < linhas.length; index++) {
            linhas[index].remove()
            
        }

    }
  for (let index = 0; index <= 10; index++) {
    var resultados = document.createElement('p')
    resultados.innerText=this.value+'x'+ index + '=' + this.value * index
    resultado.appendChild(resultados)
  }
});
