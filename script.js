function agregarProducto(){
    let inputProducto = document.getElementById("producto");
    let textoProducto = inputProducto.value;

    if(textoProducto !== ""){
        let nuevaEntrada = document.createElement("li")
        nuevaEntrada.innerText = textoProducto;

        nuevaEntrada.addEventListener("click",tacharProducto)

        document.getElementById("lista").appendChild(nuevaEntrada)
        inputProducto.value = "";
    }
}

function tacharProducto(event){
    let elemento = event.target; //El elemento en el que hiciste click

    if(elemento.classList.contains("tachado")){
        elemento.classList.remove("tachado")
    }else{
        elemento.classList.add("tachado")
    }
}

document.getElementById("agregar").addEventListener("click",agregarProducto)