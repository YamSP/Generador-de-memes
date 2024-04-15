const changeMode = document.getElementById('change-mode');
const header = document.getElementById('header');
const openWindowImage = document.getElementById('open-window-image');
const openWindowText = document.getElementById('open-window-title')
const memeContainer = document.getElementById('meme-container')
const sidebar = document.getElementById('sidebar')
let modo = 'claro';

changeMode.addEventListener('click', () => {
  if (modo === 'claro') {
    changeMode.textContent = "Modo oscuro";
    header.style.backgroundColor = "#7E3E69";
    openWindowImage.style.backgroundColor = "#7E3E69";
    openWindowText.style.backgroundColor = "#7E3E69";
    memeContainer.style.backgroundColor = "#8B5496";
    sidebar.style.backgroundColor = "#7E3E69";
    modo = 'oscuro';
  } else {
    changeMode.textContent = "Modo claro";
    header.style.backgroundColor = "black";
    openWindowImage.style.backgroundColor = "black";
    openWindowText.style.backgroundColor = "black";
    memeContainer.style.backgroundColor = "#252424d9";
    sidebar.style.backgroundColor = "black";
    modo = 'claro';
  }
});



/* Cargar imagen desde url */
const urlInput = document.getElementById('url')
const memeBox = document.getElementById('meme-box')

urlInput.addEventListener('keyup', function (event){
  console.log("Hello there!")
  if (event.key === "Enter") {
    const urlImg = urlInput.value.trim();

    if (urlImg) {
        memeBox.style.backgroundImage = url('${urlImg}');
        memeBox.style.backgroundSize = "cover";
        memeBox.style.backgroundPosition = "center";
        urlInput.value = ""; // Saco la url deel input
    } else {
        console.log("No se proporcionó una URL válida para la imagen.");
    }
}
})