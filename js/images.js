var myRequest = new Request('https://raw.githubusercontent.com/hc-schoolextensions/slcs-band-website/data/images.txt');
var imageContainer = document.getElementById('imgcontainer');

fetch(myRequest)
    .then(response => response.text())
    .then(data => imageContainer.innerHTML = data);