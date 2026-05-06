function calcular() {
    const cuenta = parseFloat(document.getElementById("cuenta").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
    const personas = parseInt(document.getElementById("personas").value);

    if (isNaN(cuenta) || cuenta <= 0) {
        alert("Por favor ingresa un total válido");
        return;
    }

    if (isNaN(personas) || personas < 1) {
        alert("Por favor ingresa un número válido de personas");
        return;
    }

    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;
    const porPersona = total / personas;

    document.getElementById("propina").textContent = "$" + propina.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
    document.getElementById("porPersona").textContent = "$" + porPersona.toFixed(2);

    document.getElementById("resultado").style.display = "block";
}