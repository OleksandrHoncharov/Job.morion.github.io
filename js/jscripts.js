$(document).ready(function () {

    // Page scroll
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 30
    });

});

$(function () {
    $("[data-toggle='tooltip']").tooltip();
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });
    var geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').innerHTML;
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}



$("#to_the_top").scroll2Top({
    appearAt: 250,
    scrollSpeed: 100
});








$(document).ready(function () {
    $('.spoiler-title').click(function () {
        $(this).parent().children('.spoiler-body').slideToggle(500);
        $(this).find('.glyphicon').toggleClass('glyphicon-chevron-right').toggleClass('glyphicon-chevron-down');
        return false;
    });

});


$(function () {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    // We can watch for our custom `fileselect` event like this
    $(document).ready(function () {
        $(':file').on('fileselect', function (event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if (input.length) {
                input.val(log);
            } else {
                if (log) alert(log);
            }

        });
    });

});


var clients = [
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Львов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "999999999",
        "Название": "Менеджер",
        "Город": "Киев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "888888888",
        "Название": "Медпредставитель",
        "Город": "Николаев",
        "Дата": "29.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Менеджер",
        "Город": "Одесса",
        "Дата": "30.08.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "444444444",
        "Название": "Медпредставитель",
        "Город": "Чернигов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Менеджер",
        "Город": "Львов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Специалист по регистрации",
        "Город": "Киев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "222222222",
        "Название": "Медпредставитель",
        "Город": "Николаев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Специалист по регистрации",
        "Город": "Одесса",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Чернигов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Специалист по регистрации",
        "Город": "Львов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Киев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Николаев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Одесса",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Чернигов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Львов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Киев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Николаев",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Одесса",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    },
    {
        "ID": "100455000",
        "Название": "Медпредставитель",
        "Город": "Чернигов",
        "Дата": "28.07.2017",
        "Тип": "Стандарт"
    }
    ];


$("#jsGrid").jsGrid({
    width: "100%",
    height: "90%",

    filtering: true,
    editing: true,
    inserting: true,
    sorting: true,
    paging: true,
    autoload: true,
    pageSize: 15,
    pageButtonCount: 5,
    deleteConfirm: "Do you really want to delete the client?",

    data: clients,

    fields: [
        {
            name: "ID",
            type: "text",
            align: "left"
        },
        {
            name: "Название",
            type: "text",
            width: 200,
            align: "left"
        },
        {
            name: "Дата",
            type: "text",
            align: "left"
        },
        {
            name: "Город",
            type: "text",
            align: "left"
        },
        {
            name: "Тип",
            type: "text",
            align: "left"
        },
        {
            type: "control"
        }
        ]
});








