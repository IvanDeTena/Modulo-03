# módulo-03 	:lemon:

**Bootcamp JS 2 - Variables y Backticks en JavaScript**

Este documento explica los distintos tipos de variables en JavaScript y el uso de los backticks para crear template literals.

## Tipos de Variables
### :one: var
Define una variable con alcance de función (o global si está fuera de una función). Puede ser redeclarada y modificada, pero se comporta de manera inconsistente debido al hoisting (sube su declaración al inicio del contexto).

### :two: let
Define una variable con alcance de bloque. Es más predecible que var, no puede ser redeclarada en el mismo bloque, pero sí modificada.

### :three: const
Define una constante con alcance de bloque. No puede ser redeclarada ni modificada (aunque las propiedades de objetos o arrays definidos con const pueden cambiar).

## Backticks (`) y Template Literals

Los backticks permiten crear template literals (plantillas de cadenas), que son una forma avanzada de manejar cadenas de texto en JavaScript. A diferencia de las comillas simples (') o dobles ("), los backticks permiten:

### :four: Interpolación de Variables
Usa ${} para insertar variables dentro de cadenas de texto.

### :five: Cadenas Multilínea
Permiten escribir cadenas en varias líneas sin necesidad de concatenar.

Ejemplo Básico:
javascript
Copiar código
const nombre = "Juan";
const saludo = `Hola, ${nombre}! Bienvenido.`;

console.log(saludo); // Imprime: Hola, Juan! Bienvenido.
Ejemplo de Cadenas Multilínea:
javascript
Copiar código
const texto = `Esto es
una cadena
en varias líneas.`;

console.log(texto);
// Imprime:
// Esto es
// una cadena
// en varias líneas.
Los backticks son muy útiles cuando necesitas insertar variables dentro de cadenas o trabajar con texto en múltiples líneas.