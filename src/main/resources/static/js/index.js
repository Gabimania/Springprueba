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

    document.getElementById("btnEnviarAlumno").onclick=()=>{
        let alumno={
            id:document.getElementById("idalumno").value,
            nombre:document.getElementById("nombre").value,
            apellidos:document.getElementById("apellidos").value,
            edad:document.getElementById("edad").value
        }
        let url = location.origin + "/api/alumno";
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alumno)
        })
            .then(datos=>datos.json())
            .then(datos=>{
                console.log(datos);
            })
            .catch(err=>{
                console.log(err);
            })


    }
};
