let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    let resultado = [...amigos];
    do {
        resultado = resultado.sort(() => Math.random() - 0.5);
    } while (resultado.some((amigo, index) => amigo === amigos[index]));

    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar resultados antes de mostrar nuevos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        let siguiente = (i + 1) % amigos.length;
        li.textContent = `${resultado[i]} le regala a ${resultado[siguiente]}`;
        listaResultado.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function seleccionarAmigoAleatorio() {
    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo seleccionado: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}
