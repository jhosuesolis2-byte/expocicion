
// variables 

// para saludar una alerta
const welcome = "«¡Hola! 👋 Te doy la bienvenida a mi sitio web. Diseñé este espacio con mucho entusiasmo. ¡Espero que lo disfrutes! Te invito a explorar y descubrir todo lo que he preparado aquí.»";
alert (welcome)



// Objeto con los atributos del perro
const docs = {
   nombre: "Beto",
   peso: "35kg",
   mordida: "70psi",
   muerde: true
};

function ejecutarDemo() {
    // Seleccionamos el contenedor de la terminal
    const terminalOutput = document.getElementById('terminal-output');

    let doc = "el perro te puede morder";
    let cat = "el gato te puede aruñar";

    let resultado = "";

    // 1. Lógica de condiciones usando el objeto
    if (doc) {  
        resultado += `> if (doc) {\n  console.log("El perro ${docs.nombre} " + doc + " !Cuidado!");\n}\n\n`;
        resultado += `[Consola]: El perro ${docs.nombre} ${doc} (Peso: ${docs.peso}) !Cuidado¡\n\n`;
    } else {
        resultado += `> else {\n  console.log("el gato " + cat + " !cuidado¡");\n}\n\n`;
        resultado += `[Consola]: el gato ${cat} !cuidado¡\n\n`;
    }

    // 2. Lógica del ciclo for
    resultado += `> for (let i = 1; i <= 10; i++) {\n    console.log("guau guau " + i + " cuidado");\n  }\n\n`;
    
    for (let i = 1; i <= 10; i++) {
        resultado += `[Consola]: guau guau ${i} cuidado\n`;
    }

    resultado += `\n[Consola]: ¡Te mordió el perro ${docs.nombre}! 🐕`;

    // Mostramos todo el resultado impreso en la terminal
    terminalOutput.textContent = resultado;
}



