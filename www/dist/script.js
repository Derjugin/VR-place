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