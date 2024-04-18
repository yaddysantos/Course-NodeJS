const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneration",
  edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${poder}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// function printHero(hero) {
//   const { nombre, apellido, poder, edad = 0 } = deadpool;
//   console.log(nombre, apellido, poder);
// }

// printHero(deadpool);

function printHero({ nombre, apellido, poder, edad = 0 }) {
  nombre = 'Fernando';
  console.log(nombre, apellido, poder, edad);
}

const heroes = ['Deadpool', ' Superman', 'Batmant'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [ , ,h3] = heroes;
console.log(h1);

