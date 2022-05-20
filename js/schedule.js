var myRequest = new Request('https://raw.githubusercontent.com/hc-schoolextensions/slcs-band-website-data/main/schedule.txt');

fetch(myRequest)
    .then(response => response.text())
    .then(data => document.getElementById('schedule-container').textContent = data);