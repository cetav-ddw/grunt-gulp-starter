for (var i = 5 - 1; i >= 0; i--) {
    console.log('Hola desde la consola');
};

function showAlert (e) {
    alert('Clic sobre la imagen!');
}

var img = document.querySelector('.content-img');
img.addEventListener('click', showAlert);