function init() {

    var PersonPlacemark,
        CompPlacemark,
        myMap = new ymaps.Map("map", {
        center: [39.13, 34.95],
        zoom: 3
    });

    for(var i=0; i < person_cities.length; i++) {
        ymaps.geocode(person_cities[i], { results: 1 }).then(function (res) {

            var firstGeoObject = res.geoObjects.get(0);

            PersonPlacemark = new ymaps.Placemark(firstGeoObject.geometry.getCoordinates(), { content: '', balloonContent: '' }, {preset: 'twirl#darkgreenDotIcon' });

            myMap.geoObjects.add(PersonPlacemark);
        })
    }

    for(var j=0; j < comp_cities.length; j++) {
        ymaps.geocode(comp_cities[j], { results: 1 }).then(function (res) {

            var firstGeoObject = res.geoObjects.get(0);

            CompPlacemark = new ymaps.Placemark(firstGeoObject.geometry.getCoordinates(), { content: '', balloonContent: '' }, {preset: 'twirl#redDotIcon' });

            myMap.geoObjects.add(CompPlacemark);
        })
    }

}
