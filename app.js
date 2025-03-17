document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

addEventListener 
function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}
