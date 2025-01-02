function printGreetings(username) {
    if (username === undefined) {
        return "Hola visitante"
    }
    else {
        return "Hola " + username
    }
}

const resultado = printGreetings("Juan")
console.log(resultado) // Hola Juan


// Usando Sugar Syntax

const printGreetingsSugar = (username) => {
    return username === undefined ? "Hola visitante" : `Hola ${username}`
}

const resultadoSugar = printGreetingsSugar("Juan")
console.log(resultadoSugar) // Hola Juan