const byId = document.getElementById("byId");

const queryId = document.querySelector("#queryId");

const queryClass = document.querySelector(".query-class")

const queryTag = document.querySelector("div");

const tagHTML = document.getElementsByTagName("div");

const queryAllTags = document.querySelectorAll("div")


queryAllTags.forEach (node => {
    console.info(node)
})

console.log(queryAllTags);

/*
console.log(`Elemento indice 4 ${tagHTML[4]}`);

console.dir(byId);

console.dir(queryId);

console.dir(queryClass);

console.warn(queryTag);

console.log(tagHTML);

queryClass.innerHTML = `Elemento obtenido por el querySelector class`

// byId.innerText = `Hola`
*/
