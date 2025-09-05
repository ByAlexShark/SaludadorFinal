document.getElementById('saludarBtn').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const genero = document.getElementById('genero').value;

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  let saludoHora = '';
  if (horaActual < 12) {
    saludoHora = 'Buenos días';
  } else if (horaActual < 19) {
    saludoHora = 'Buenas tardes';
  } else {
    saludoHora = 'Buenas noches';
  }

  let saludoGenero = '';
  if (genero === 'masculino') {
    saludoGenero = 'Sr.';
  } else if (genero === 'femenino') {
    saludoGenero = 'Sra.';
  }

  if (nombre) {
    document.getElementById('saludo').textContent = `${saludoHora}, ${saludoGenero} ${nombre}!`;
  } else {
    document.getElementById('saludo').textContent = `${saludoHora}, ¿cómo te llamas?`;
  }
});
