window.onload = () => {
    document.getElementById("btnPedirDatos").onclick = () => {
        let url =  "/api/pedirdatos?dat=34&texto=hola"; // Ruta a tu API
        fetch(url)
            .then(datos => datos.json())
            .then(datos => {
                let lista = document.getElementById("lista")
                for (let i = 0; i < datos.length; i++) { // Corregido "length"
                    let liElement = document.createElement("li");
                    liElement.textContent=datos[i];
                    lista.append(liElement);
                }
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    };
};
