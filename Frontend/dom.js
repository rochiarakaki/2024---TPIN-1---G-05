// CAMBIOS DE PANTALLA
function changeScreenIn() {
    const presentacion = document.getElementById("presentacion");
    const contenido = document.getElementById("contenido");
    

    if(contenido.style.display !== "none") {
        contenido.style.display = "none";
        presentacion.style.display = "";
    }
    else {
        contenido.style.display = "";
        presentacion.style.display = "none";
    }
}

function changeScreenOut() {
    const presentacion = document.getElementById("presentacion");
    const contenido = document.getElementById("contenido");
    

    if(presentacion.style.display !== "none") {
        presentacion.style.display = "none";
        contenido.style.display = "";
    }
    else {
        presentacion.style.display = "";
        contenido.style.display = "none";
    }
}


function changeScreenRegister() {
    const logIn = document.getElementById("logueamos");
    const register = document.getElementById("registramos");
    

    if(register.style.display !== "none") {
        register.style.display = "none";
        logIn.style.display = "";
    }
    else {
        register.style.display = "";
        logIn.style.display = "none";
    }
}

function changeScreenLogIn() {
    const logIn = document.getElementById("logueamos");
    const register = document.getElementById("registramos");
    

    if(logIn.style.display !== "none") {
        logIn.style.display = "none";
        register.style.display = "";
    }
    else {
        
        logIn.style.display = "";
        register.style.display = "none";
    }
}

// GET

function getUserLogIn() {
    return doocument.getElementById("usuarioLogin").value
}
function getPasswordLogIn() {
    return doocument.getElementById("contraseñaLogin").value
}
function getDni() {
    return doocument.getElementById("dni").value
}
function getName() {
    return doocument.getElementById("nombre").value
}
function getUsername() {
    return doocument.getElementById("apellido").value
}
function getUser() {
    return doocument.getElementById("usuario").value
}
function getPassword() {
    return doocument.getElementById("contraseña").value
}