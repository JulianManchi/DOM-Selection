const queryClassElements = document.querySelectorAll(".query-class");

console.log(queryClassElements);

const activarElemento = (indice) => {
    // resetear las clases de mis elementos
    queryClassElements.forEach(i => {
        i.classList.remove("active")
    });
    
    // buscar el elemento y setearlo - activarlo
    queryClassElements[indice].classList.toggle("active");
}