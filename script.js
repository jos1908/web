function showText(text) {
    const wrappers = document.querySelectorAll('.image-wrapper');
    wrappers.forEach(wrapper => {
        const overlay = wrapper.querySelector('.overlay');
        if (overlay.textContent === text) {
            wrapper.classList.toggle('active');
        } else {
            wrapper.classList.remove('active');
        }
    });
}

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    } else {
        console.error(`No se encontró el elemento de audio con ID: ${audioId}`);
    }
}

function openLink(url) {
    window.open(url, '_blank');
}

function openLocalPage(page) {
    window.location.href = page;
}

// Reiniciar el GIF del gatito
function restartGif() {
    const catGif = document.getElementById('cat-gif');
    const src = catGif.src;
    catGif.src = ''; // Forzar la recarga del GIF
    catGif.src = src;
}

// Reiniciar el GIF cada 5 segundos
setInterval(restartGif, 5000);
