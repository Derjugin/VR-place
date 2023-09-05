// ВИДЕО
  
document.addEventListener('DOMContentLoaded', function() {
  let videoContainer = document.querySelector('.video-container');
  let videoWrapper = videoContainer.querySelector('.video-wrapper');
  let videoIframe = videoWrapper.querySelector('iframe');
  let closeButton = videoWrapper.querySelector('.close-button');
  let videoTriggers = document.querySelectorAll('.video-trigger');
  
  for (let i = 0; i < videoTriggers.length; i++) {
      videoTriggers[i].addEventListener('click', function() {
        let videoUrl = this.getAttribute('data-video');
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
let videoblock = document.querySelector('.videoblock');
videoblock.innerHTML = '<iframe src="' + videoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}

// КОНЕЦ