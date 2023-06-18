const llenarDatos = () => {
    let para = document.querySelector("#para").value;
    let titulo = document.querySelector("#titulo").value;
    let mensaje = document.querySelector("#mensaje").value;
    let remitente = document.querySelector("#remitente").value;
    let emails = document.querySelectorAll(".emails");
    imprimirDatos(para, titulo, mensaje, remitente, ...emails);
}

const imprimirDatos = (para, titulo, mensaje, remitente, ...emails) => {
    console.log(`
        \n PARA: ${para}
        \n TITULO: ${titulo}
        \n MENSAJE: ${mensaje}
        \n FROM: ${remitente}
        `);

        for(let i of emails){
            if(i.value !== ""){
                console.log(`CC: ${i.value}`);
            }
        }
}


