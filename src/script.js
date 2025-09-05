document.getElementById('saludarBtn').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;

  if (nombre) {
    document.getElementById('saludo').textContent = `Hola, ${nombre}!`;
  } else {
    document.getElementById('saludo').textContent = 'Hola, ¿cómo te llamas?';
  }
});
