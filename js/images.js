var myRequest = new Request('https://raw.githubusercontent.com/hc-schoolextensions/slcs-band-website/data/images.txt');
var imageContainer = document.getElementById('imgcontainer');

fetch(myRequest)
    .then(response => response.text())
    .then(data => showImgs(data));

function showImgs(imgData) {
    imageContainer.innerHTML = imgData;
    var imgScript = document.createElement('script');
    imgScript.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
    document.body.appendChild(imgScript);
}