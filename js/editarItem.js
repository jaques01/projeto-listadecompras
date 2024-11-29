export const editaritem =  (elemento) => {
    let novoItem = prompt("Digite o novo nome do Item:");

    if (novoItem !== null && novoItem.trim() !=="") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if(estavaComprado) { 
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector("checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through"; 
        }
    }
}