ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.754157, 37.608643],
        zoom: 15,
        // Добавим панель маршрутизации.
        controls: ['routePanelControl', 'fullscreenControl']
    });

    var control = myMap.controls.get('routePanelControl');

    // Зададим состояние панели для построения машрутов.
    control.routePanel.state.set({
        // Тип маршрутизации.
        type: 'masstransit',
        // Выключим возможность задавать пункт отправления в поле ввода.
        fromEnabled: true,
        // Адрес или координаты пункта отправления.
        //from: 'Москва, Льва Толстого 16',
        // Включим возможность задавать пункт назначения в поле ввода.
        toEnabled: false,
        // Адрес или координаты пункта назначения.
        to: 'Москва, Романов переулок, 2с1'
    });

    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
        // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
        allowSwitch: false,
        // Включим определение адреса по координатам клика.
        // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
        reverseGeocoding: true,
        // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
        types: { masstransit: true, pedestrian: true, taxi: true }
    });

    // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
    var switchPointsButton = new ymaps.control.Button({
        data: {content: "Поменять местами", title: "Поменять точки местами"},
        options: {selectOnClick: false, maxWidth: 160}
    });
    // Объявляем обработчик для кнопки.
    switchPointsButton.events.add('click', function () {
        // Меняет местами начальную и конечную точки маршрута.
        control.routePanel.switchPoints();
    });
    myMap.controls.add(switchPointsButton);
        myMap.controls.add(switchPointsButton);var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
                top:200,
                left:10
            }
        }
    });
    myMap.controls.add(zoomControl);

        // Создаём макет содержимого.    
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/dist/img/maps-geo.svg',
            // Размеры метки.
            iconImageSize: [80, 80],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -49]
        }),

        myMap.geoObjects.add(myPlacemark)
});
