$(document).ready(function() {
    var list = [
        {
            "year": 2007,
            "make": "Ford",
            "model": "Mustang",
            "color": "Silver",
            "milage": "124,233",
            "engine": "5.0L",
            "transmission": "Manual",
            "photo_url": "http://kennebell.net/wp-content/uploads/2017/09/01-ford-mustang-2007-gt-kenne-bell-Press-1200-600-1024x512.jpg",
            "price": "$5,999"
        },
        {
            "year": 2005,
            "make": "Toyota",
            "model": "Corolla",
            "color": "Silver",
            "milage": "184,829",
            "engine": "1.8L",
            "transmission": "Automatic",
            "photo_url": "https://i0.wp.com/images01.olx-st.com/ui/54/63/87/44/o_1509559491_0b4a1028dff6b06efaa6caf0b8666bd9.jpg?ssl=1",
            "price": "$4,500"
        },
        {
            "year": 2015,
            "make": "Dodge",
            "model": "Charger",
            "color": "White",
            "milage": "21,043",
            "engine": "5.7L",
            "transmission": "Manual",
            "photo_url": "https://hips.hearstapps.com/roa.h-cdn.co/assets/15/50/1449863161-dodge-charger-hellcat.jpg",
            "price": "$28,499"
        },
        {
            "year": 2012,
            "make": "Chevrolet",
            "model": "Camaro",
            "color": "Grey",
            "milage": "57,832",
            "engine": "3.6L",
            "transmission": "Automatic",
            "photo_url": "https://images.hgmsites.net/lrg/chevrolet-camaro-zl1-carbon-concept_100368423_l.jpg",
            "price": "$11,999"
        },
        {
            "year": 2007,
            "make": "Honda",
            "model": "Civic",
            "color": "Burgundy",
            "milage": "143,288",
            "engine": "1.7L",
            "transmission": "Automatic",
            "photo_url": "https://hips.hearstapps.com/roa.h-cdn.co/assets/17/07/1024x512/landscape-1487022045-0-5.jpg?resize=1200:*",
            "price": "$3,599"
        }
    ];
    for (let i = 0; i < list.length; i++) {
        $("#main-section").append(
            "<div class=\"col-xs-12 col-md-6 col-lg-4\"><div class=\"car-container\">" +
            "<img class=\"car-image\" src=\"" + list[i].photo_url + "\" />" +
            "<span class=\"car-make\">" + list[i].year + " " + list[i].make + " " + list[i].model + "</span>" +
            "<span class=\"car-color\">" + list[i].color + "</span>" +
            "<span class=\"car-milage\">" + list[i].milage + " miles</span>" +
            "<span class=\"car-engine\">" + list[i].engine + "/" + list[i].transmission + "</span>" +
            "<span class=\"car-price\">" + list[i].price + "</span></div></div>"
        );
    }
});