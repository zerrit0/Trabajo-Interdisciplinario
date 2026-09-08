
const palabrasIngles = [
  { ingles: "Movie", espanol: "Película", significado: "Representación de historias en imágenes en movimiento" },
  { ingles: "actors", espanol: "Actores", significado: "Personas que interpretan roles en una película" },
  { ingles: "artist", espanol: "Artista", significado: "Persona que crea obras de arte" },
  { ingles: "genre", espanol: "Género", significado: "Categoría de una obra de arte" },
  { ingles: "song", espanol: "Canción", significado: "Obra musical" },
  { ingles: "scene", espanol: "Escena", significado: "Momento en una película" },
  { ingles: "Sorry", espanol: "Perdón", significado: "Disculpa" },
  { ingles: "Excuse me", espanol: "Disculpe", significado: "Llamar la atención o pedir permiso" },
  { ingles: "Friend", espanol: "Amigo", significado: "Persona con la que se tiene amistad" },
  { ingles: "Family", espanol: "Familia", significado: "Grupo de parientes" },
  { ingles: "House", espanol: "Casa", significado: "Lugar donde se vive" },
  { ingles: "Work", espanol: "Trabajo", significado: "Actividad laboral" },
  { ingles: "School", espanol: "Escuela", significado: "Lugar de estudio" },
  { ingles: "Today", espanol: "Hoy", significado: "El día actual" },
  { ingles: "Tomorrow", espanol: "Mañana", significado: "El día siguiente" },
  { ingles: "Water", espanol: "Agua", significado: "Líquido esencial para vivir" },
  { ingles: "Food", espanol: "Comida", significado: "Alimento" },
  { ingles: "Time", espanol: "Tiempo", significado: "Duración de las cosas" },
  { ingles: "Happy", espanol: "Feliz", significado: "Estado de alegría" },
  { ingles: "Tired", espanol: "Cansado", significado: "Falta de energía" },
  { ingles: "Fast", espanol: "Rápido", significado: "Que se mueve con velocidad" },
  { ingles: "Slow", espanol: "Lento", significado: "Que se mueve con poca velocidad" }
];

const tablaIngles = document.getElementById("tabla-ingles");

for (const palabra of palabrasIngles) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${palabra.ingles}</td>
    <td>${palabra.espanol}</td>
    <td>${palabra.significado}</td>
  `;
  tablaIngles.appendChild(fila);
}

const terminosTecnicos = [
  { ingles: "variable", espanol: "Variable", significado: "Espacio donde se guarda un valor" },
  { ingles: "let", espanol: "Variable modificable", significado: "Declara una variable que puede cambiar" },
  { ingles: "const", espanol: "Variable constante", significado: "Declara una variable cuyo valor no se reasigna" },
  { ingles: "br", espanol: "br", significado: "Permite saltarse una línea (se llama quiebre de línea)" },
  { ingles: "function", espanol: "Función", significado: "Bloque de código reutilizable" },
  { ingles: "head", espanol: "Cabeza", significado: "Ejecuta código si se cumple una condición" },
  { ingles: "else", espanol: "Sino", significado: "Ejecuta código si la condición del if no se cumple" },
  { ingles: "for", espanol: "Bucle para", significado: "Repite un bloque de código un número de veces" },
  { ingles: "LI ", espanol: "lI", significado: "primer item" },
  { ingles: "title", espanol: "Título", significado: " Indica el título." },
  { ingles: "object", espanol: "Objeto", significado: "Datos guardados en pares de clave y valor" },
  { ingles: "string", espanol: "Cadena de texto", significado: "Tipo de dato que representa texto" },
  { ingles: "number", espanol: "Número", significado: "Tipo de dato que representa valores numéricos" },
  { ingles: "STRONG", espanol: "STRONG", significado: "Enfatizada." },
  { ingles: "comment", espanol: "Comentario", significado: "Texto que el programa no ejecuta, sirve de explicación" },
  { ingles: "operator", espanol: "Operador", significado: "Símbolo que realiza una operación, como + o -" },
  { ingles: "condition", espanol: "Condición", significado: "Expresión que se evalúa como verdadera o falsa" },
  { ingles: "loop", espanol: "Bucle", significado: "Estructura que repite instrucciones" },
  { ingles: "print", espanol: "Imprimir", significado: "Mostrar un valor en pantalla o consola" },
  { ingles: "return", espanol: "Retornar", significado: "Devuelve un valor desde una función" },
  { ingles: "input", espanol: "Entrada", significado: "Dato que recibe el programa" },
  { ingles: "Algorithm", espanol: "Algoritmo", significado: "Conjunto de pasos para resolver un problema" }
];

const tablaTecnica = document.getElementById("tabla-tecnica");

for (const termino of terminosTecnicos) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${termino.ingles}</td>
    <td>${termino.espanol}</td>
    <td>${termino.significado}</td>
  `;
  tablaTecnica.appendChild(fila);
}

let arrayprogramacion = [
  "&lt;h1&gt:",
  "&lt;p&gt;",
  "&lt;img&gt;",
  "&lt;a&gt;",
  "let",
  "const",
];
