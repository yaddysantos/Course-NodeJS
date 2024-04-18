console.log('Inicio del programa');

setTimeout(() => {
    console.log('1er timeout');
}, 3000); // 3seg

setTimeout(() => {
    console.log('2do timeout');
}, 0); // 3seg

setTimeout(() => {
    console.log('3er timeout');
}, 0); // 3seg

console.log('Fin del programa');