function toggleVideo(state, index) {
    var div = document.querySelectorAll("[data-ytmodal]")[index];
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    var func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

const frames = document.querySelectorAll('[data-ytmodal]');
frames.forEach(element => {
    element.addEventListener('blur', function (e) {
        if (e.sourceCapabilities !== undefined && e.target.tagName != "BUTTON") {
            toggleVideo('hide', element.dataset.mIndex - 1);
        }
    });
});

const cb = document.querySelectorAll('[data-ytmodal]');
cb.forEach(element => {
    element.addEventListener('click', function (e) {
        toggleVideo("hide", element.dataset.mIndex - 1);
    });
});