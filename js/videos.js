var myRequest = new Request('https://raw.githubusercontent.com/hc-schoolextensions/slcs-band-website/data/videos.txt');
var videoContainer = document.getElementById('mvgcont');

fetch(myRequest)
    .then(response => response.text())
    .then(data => createFrames(data));

function createFrames(idData) {
    idData.split("||").forEach(group => {
        var mvgl = [...videoContainer.getElementsByClassName('modal-video-gallery')].length * 3 + 1;
        var mset = group.split("::");
        videoContainer.innerHTML += `<div class="modal-video-gallery">
        <section class="" style="width: 95%;">
            <section class="">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light"
                            data-index="${mvgl}">
                            <img data-tbvideoid="${mset[0]}" class="w-100" />
                            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#modal${mvgl}">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light"
                            data-index="${mvgl + 1}">
                            <img data-tbvideoid="${mset[1]}" class="w-100" />
                            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#modal${mvgl + 1}">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light"
                            data-index="${mvgl + 2}">
                            <img data-tbvideoid="${mset[2]}" class="w-100" />
                            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#modal${mvgl + 2}">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="">
                <div class="modal fade" id="modal${mvgl}" tabindex="-1"
                    aria-hidden="true" data-ytmodal data-m-index="${mvgl}">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="ratio ratio-16x9">
                                <iframe data-videoid="${mset[0]}" title="YouTube video" frameborder="0"
                                    data-m-index="${mvgl}" allowfullscreen></iframe>
                            </div>

                            <div class="text-center py-3">
                                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" data-close
                                    data-m-index="${mvgl}">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal${mvgl + 1}" tabindex="-1"
                    aria-hidden="true" data-ytmodal data-m-index="${mvgl + 1}">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="ratio ratio-16x9">
                                <iframe data-videoid="${mset[1]}" title="YouTube video" frameborder="0"
                                    data-m-index="${mvgl + 1}" allowfullscreen></iframe>
                            </div>

                            <div class="text-center py-3">
                                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" data-close
                                    data-m-index="${mvgl + 1}">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal${mvgl + 2}" tabindex="-1"
                    aria-hidden="true" data-ytmodal data-m-index="${mvgl + 2}">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="ratio ratio-16x9">
                                <iframe data-videoid="${mset[2]}" title="YouTube video" frameborder="0"
                                    data-m-index="${mvgl + 2}" allowfullscreen></iframe>
                            </div>

                            <div class="text-center py-3">
                                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" data-close
                                    data-m-index="${mvgl + 2}">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>`
    });
    document.querySelectorAll('[data-tbvideoid]').forEach(element => {
        element.src = `https://img.youtube.com/vi/${element.dataset.tbvideoid}/maxresdefault.jpg`;
    });
    
    document.querySelectorAll('[data-videoid]').forEach(element => {
        element.src = `https://www.youtube-nocookie.com/embed/${element.dataset.videoid}?enablejsapi=1`;
    });

    function toggleVideo(state, index) {
        var div = document.querySelectorAll("[data-ytmodal]")[index];
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        var func = state == 'hide' ? 'pauseVideo' : 'playVideo';
        iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    }
    
    document.querySelectorAll('[data-ytmodal]').forEach(element => {
        element.addEventListener('click', function (e) {
            toggleVideo("hide", element.dataset.mIndex - 1);
        });
    });
}