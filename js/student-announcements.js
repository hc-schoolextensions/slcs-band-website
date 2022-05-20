var myRequest = new Request('https://raw.githubusercontent.com/hc-schoolextensions/slcs-band-website-data/main/student-announcements.txt');

fetch(myRequest)
    .then(response => response.text())
    .then(data => document.getElementById('st-announcements-container').innerHTML = data);