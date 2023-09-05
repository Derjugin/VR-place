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
