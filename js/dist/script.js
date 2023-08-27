// МЕНЮ
function openNav() {
    document.getElementById('myNav').style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "";
  }
// КОНЕЦ

// js меню по нажатию
document.addEventListener('DOMContentLoaded', function() {
  let firstLevelItems = document.querySelectorAll('.first-level');

  // Обработчик события для каждого элемента first-level
  firstLevelItems.forEach(function(item) {
    let secondLevel = item.querySelector('.second-level');
    let arrow = item.querySelector('img');

    item.addEventListener('click', function() {
      // Проверяем, открыто ли выпадающее меню
      let isOpen = secondLevel.classList.contains('open');

      // Закрываем все открытые меню
      firstLevelItems.forEach(function(otherItem) {
        let otherSecondLevel = otherItem.querySelector('.second-level');
        let otherArrow = otherItem.querySelector('img');

        if (otherSecondLevel !== secondLevel && otherSecondLevel.classList.contains('open')) {
          otherSecondLevel.classList.remove('open');
          otherArrow.style.transform = 'rotate(0deg)';
        }
      });

      // Изменяем состояние текущего меню и поворачиваем изображение стрелку
      if (isOpen) {
        secondLevel.classList.remove('open');
        arrow.style.transform = 'rotate(0deg)';
      } else {
        secondLevel.classList.add('open');
        arrow.style.transform = 'rotate(180deg)';
      }
    });
  });
});

// js меню по нажатию END



// slider

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const images = document.querySelectorAll('.contacts-sl .contact-card');

let imageIndex = 0;

nextButton.onclick = function() {
    images[imageIndex].classList.remove('show');

    if (imageIndex >= images.length - 1) {
        imageIndex = 0;
        } else {
            imageIndex = imageIndex + 1;
        }    

    images[imageIndex].classList.add('show');
}

prevButton.onclick = function() {
    images[imageIndex].classList.remove('show');

    if (imageIndex <= 0) {
        imageIndex = images.length - 1;
        } else {
            imageIndex = imageIndex - 1;
        }  

    images[imageIndex].classList.add('show');
}

// slider END

// Форма обратной связи 
document.querySelector('.btn').addEventListener('click', function(event) {
  event.preventDefault(); // предотвращаем отправку формы
  
  let name = document.getElementById('name').value;
  let secondname = document.getElementById('secondname').value;
  let phone = document.querySelector('input[type="tel"]').value;
  let email = document.querySelector('input[type="email"]').value;
  let message = document.querySelector('.message').value;

  // Получаем значения полей формы в консоле
  console.log('Имя: ' + name);
  console.log('Фамилия: ' + secondname);
  console.log('E-mail: ' + email);
  console.log('Телефон: ' + phone);
  console.log('Сообщение: ' + message);

  // Получаем значения полей формы в окне
  let popup = window.open('', '', 'width=350,height=350,top=' + (window.innerHeight/2 - 175) + ',left=' + (window.innerWidth/2 - 175)); //параметры окна
  popup.document.write('<h1>Поля выведены в консоль</h1>');
  popup.document.write('<p>Имя: ' + name + '</p>');
  popup.document.write('<p>Фамилия: ' + secondname + '</p>');
  popup.document.write('<p>E-mail: ' + email + '</p>');
  popup.document.write('<p>Телефон: ' + phone + '</p>');
  popup.document.write('<p>Сообщение: ' + message + '</p>');
});
// ФОС END


// ВИДЕО
  /* 
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
} */

  // КОНЕЦ
