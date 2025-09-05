document.getElementById('saludarBtn').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const genero = document.getElementById('genero').value;
  const idioma = document.getElementById('idioma').value;

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  let saludoHora = '';
  if (horaActual < 12) {
    saludoHora = idioma === 'espanol' ? 'Buenos días' : 'Good morning';
  } else if (horaActual < 19) {
    saludoHora = idioma === 'espanol' ? 'Buenas tardes' : 'Good afternoon';
  } else {
    saludoHora = idioma === 'espanol' ? 'Buenas noches' : 'Good evening';
  }

  let saludoGenero = '';
  if (genero === 'masculino') {
    saludoGenero = idioma === 'espanol' ? 'Sr.' : 'Mr.';
  } else if (genero === 'femenino') {
    saludoGenero = idioma === 'espanol' ? 'Sra.' : 'Mrs.';
  }

  if (nombre) {
    document.getElementById('saludo').textContent = `${saludoHora}, ${saludoGenero} ${nombre}!`;
  } else {
    document.getElementById('saludo').textContent = `${saludoHora}, ¿cómo te llamas?`;
  }
});
