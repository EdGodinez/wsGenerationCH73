function getFormvalue(){

    const formulario = document.getElementById("form1");

    const nombre = formulario.elements["fname"].value;
    const apellido = formulario.elements["lname"].value;

    console.log("Nombre: ", nombre);
    console.log("Apellido: ", apellido);

    //Para evitar que el resultado en consola se elimine
    return false;
}
