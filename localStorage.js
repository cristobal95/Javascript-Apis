document.getElementById('boton1').addEventListener('click', () => {
  const nombre = prompt('Escribe tu Nombre');
  window.localStorage.setItem('usuario', nombre);
});
