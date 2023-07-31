// МЕНЮ
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  // КОНЕЦ


  document.addEventListener('DOMContentLoaded', function() {
    var videoContainer = document.querySelector('.video-container');
    var videoWrapper = videoContainer.querySelector('.video-wrapper');
    var videoIframe = videoWrapper.querySelector('iframe');
    var closeButton = videoWrapper.querySelector('.close-button');
    var videoTriggers = document.querySelectorAll('.video-trigger');
    
    for (var i = 0; i < videoTriggers.length; i++) {
        videoTriggers[i].addEventListener('click', function() {
            var videoUrl = this.getAttribute('data-video');
            videoIframe.setAttribute('src', videoUrl);
            videoContainer.classList.add('show-video');
            closeButton.style.display = 'block';
        });
    }
    
    closeButton.addEventListener('click', function() {
        videoIframe.setAttribute('src', '');
        videoContainer.classList.remove('show-video');
    });
    
    videoContainer.addEventListener('click', function(e) {
        if (e.target === this) {
            videoIframe.setAttribute('src', '');
            videoContainer.classList.remove('show-video');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            videoIframe.setAttribute('src', '');
            videoContainer.classList.remove('show-video');
        }
    });
});


function loadVideo(videoUrl) {
  var videoblock = document.querySelector('.videoblock');
  videoblock.innerHTML = '<iframe src="' + videoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}