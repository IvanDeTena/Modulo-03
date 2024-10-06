import "./style.css";


// Definición de los géneros musicales
const GENERO_POP_ROCK: string = "🎵 Pop Rock";
const GENERO_ROCK: string = "🎸 Rock";
const GENERO_HARD_ROCK: string = "🤘 Hard Rock";
const GENERO_CLASICA: string = "🎼 Clásica";

// Definición de la interfaz para el tipo de grupo musical
interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

// Lista de grupos musicales
const grupos: GrupoMusical[] = [
  { nombre: "The Beatles", añoFundacion: 1960, activo: true, genero: GENERO_POP_ROCK },
  { nombre: "Queen", añoFundacion: 1970, activo: false, genero: GENERO_ROCK },
  { nombre: "AC DC", añoFundacion: 1973, activo: true, genero: GENERO_HARD_ROCK },
  { nombre: "Ludwig van Beethoven", añoFundacion: 1770, activo: false, genero: GENERO_CLASICA },
  { nombre: "The Rolling Stones", añoFundacion: 1962, activo: true, genero: GENERO_ROCK }
];

// Define el estilo para el nombre del grupo utilizando CSS
const estiloNombreGrupo: string = 'font-weight: bold; font-size: 1.5em; background-color: green; color: white; padding: 2px 5px;';

// Imprimir información de cada grupo sin usar bucles
console.log(
  `%cNombre: %c${grupos[0].nombre}%c\nAño de Fundación: ${grupos[0].añoFundacion}\nActivo: ${grupos[0].activo ? 'Sí' : 'No'}\nGénero: ${grupos[0].genero}`,
  '', // Estilo por defecto
  estiloNombreGrupo, // Estilo para el nombre del grupo
  '' // Estilo por defecto (restablecer después del nombre)
);

console.log(
  `%cNombre: %c${grupos[1].nombre}%c\nAño de Fundación: ${grupos[1].añoFundacion}\nActivo: ${grupos[1].activo ? 'Sí' : 'No'}\nGénero: ${grupos[1].genero}`,
  '', // Estilo por defecto
  estiloNombreGrupo, // Estilo para el nombre del grupo
  '' // Estilo por defecto (restablecer después del nombre)
);

console.log(
  `%cNombre: %c${grupos[2].nombre}%c\nAño de Fundación: ${grupos[2].añoFundacion}\nActivo: ${grupos[2].activo ? 'Sí' : 'No'}\nGénero: ${grupos[2].genero}`,
  '', // Estilo por defecto
  estiloNombreGrupo, // Estilo para el nombre del grupo
  '' // Estilo por defecto (restablecer después del nombre)
);

console.log(
  `%cNombre: %c${grupos[3].nombre}%c\nAño de Fundación: ${grupos[3].añoFundacion}\nActivo: ${grupos[3].activo ? 'Sí' : 'No'}\nGénero: ${grupos[3].genero}`,
  '', // Estilo por defecto
  estiloNombreGrupo, // Estilo para el nombre del grupo
  '' // Estilo por defecto (restablecer después del nombre)
);

console.log(
  `%cNombre: %c${grupos[4].nombre}%c\nAño de Fundación: ${grupos[4].añoFundacion}\nActivo: ${grupos[4].activo ? 'Sí' : 'No'}\nGénero: ${grupos[4].genero}`,
  '', // Estilo por defecto
  estiloNombreGrupo, // Estilo para el nombre del grupo
  '' // Estilo por defecto (restablecer después del nombre)
);