let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    input.value = "";
    input.focus();
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const amigosDisponibles = [...amigos];
    const asignaciones = {};

    amigos.forEach(amigo => {
        const posiblesAmigos = amigosDisponibles.filter(a => a !== amigo);
        if (posiblesAmigos.length === 0) {
            alert("No es posible asignar amigos secretos sin repetir.");
            resultado.innerHTML = "Error en el sorteo. Intenta nuevamente.";
            return;
        }

        const amigoSecreto = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
        asignaciones[amigo] = amigoSecreto;
        amigosDisponibles.splice(amigosDisponibles.indexOf(amigoSecreto), 1);

        const resultadoElemento = document.createElement("li");
        resultadoElemento.textContent = `${amigo} → ${amigoSecreto}`;
        resultado.appendChild(resultadoElemento);
    });
}