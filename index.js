// Comprobación compatibilidad con navegador
if (window.File && window.FileReader && window.FileList){ 
    console.log('Todas las APIs soportadas');

    // Botones para reproducir, pausar, subir y bajar volumen
    const video = document.getElementById('video')
    const reproducir = document.getElementById('reproducir');
    const pausar = document.getElementById('pausar');
    const subirVolumen = document.getElementById('subir-volumen');
    const bajarVolumen = document.getElementById('bajar-volumen');
    const inputFile = document.querySelector("input[type=file]");

    video.addEventListener('loadeddata', () => alert('Se está procesando la operación, puede demorarse unos minutos.')); // Aviso al usuario
    reproducir.addEventListener('click', () => document.getElementById('video').play());
    pausar.addEventListener('click', () => document.getElementById('video').pause());
    subirVolumen.addEventListener('click', () => document.getElementById('video').volume += 0.1);
    bajarVolumen.addEventListener('click', () => document.getElementById('video').volume -= 0.1);

    // Cambiar imagen por video
    inputFile.addEventListener("change", () => {
        const [file] = inputFile.files;
        // Comprobar tipo de archivo
        if (file) {
          const formatos = ['video/mp4', 'video/webm', 'video/ogg'];
          if (formatos.includes(file.type)) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              video.src = URL.createObjectURL(file);
            });
            reader.readAsArrayBuffer(file);
          } else {
            alert('Formato de video no válido. Por favor, selecciona un archivo de video en formato MP4, WebM u Ogg.');
          }
        }
    });

} else {
        alert('La API de FILE no es soportada en este navegador');
}