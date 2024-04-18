// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);

const getUsuarioById = () => {
  const user = {
    id,
    nombre: 'Fernando',
  };

  setTimeout(() => {
    // console.log(user);
    callback(user);
  }, 1500);
};

getUsuarioById(10, (user) => {
  console.log(user.id);
  console.log(user.nombre.toUpperCase());
});
