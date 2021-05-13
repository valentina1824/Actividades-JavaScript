function resultado() {
    let nombre = document.getElementById("Nombres").value;
    let apellido = document.getElementById("Apellidos").value;
    let edad = document.getElementById("Edad").value;
    let correo = document.getElementById("Correo electronico").value;
    
    edad= parseInt(edad)

    if(nombre ==="" || apellido ==="" || edad ==="" || correo ==="" ){
        alert(`Por favor ingrese todos los campos`);
    } 
    else{
        if( edad >=18){
        alert(`Hola ${nombre} ${apellido}, has aplicado correctamente te contactamos en ${correo}`); 
    } vaciarCampos()
    
    if( edad <=18){
        alert(`No cumples con la edad requeridad`);
    } 
 }
}

function vaciarCampos(){
    document.getElementById("Nombres").value = ""
    document.getElementById("Apellidos").value = ""
    document.getElementById("Edad").value = ""
    document.getElementById("Correo electronico").value =""
    
    
}

