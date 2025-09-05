document.getElementById('saludarBtn').addEventListener('click', function() {
  // Obtenemos el nombre del campo de texto
  const nombre = document.getElementById('nombre').value;

  // Obtener la hora actual
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  // Saludar dependiendo de la hora
  let saludoHora = '';
  if (horaActual < 12) {
    saludoHora = 'Buenos días';
  } else if (horaActual < 19) {
    saludoHora = 'Buenas tardes';
  } else {
    saludoHora = 'Buenas noches';
  }

  if (nombre) {
    document.getElementById('saludo').textContent = `${saludoHora}, ${nombre}!`;
  } else {
    document.getElementById('saludo').textContent = `${saludoHora}, ¿cómo te llamas?`;
  }
});
