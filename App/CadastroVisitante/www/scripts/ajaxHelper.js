var ajaxHelper = {
    ApiGet: function (route, sendData, callback, errorhandler) {
        $.ajax({
            url: "https://example-prefix-8080.codio.io/api" + route,
            type: 'GET',
            data: (sendData ? sendData : null)
        }).done(function (data) {
            if (callback)
                callback(data);
        }).error(function (data) {
            if (errorhandler)
                errorhandler(data);
        });
    },
    ApiPost: function (route, sendData, callback, errorhandler) {
        $.ajax({
            url: "https://example-prefix-8080.codio.io/api" + route,
            type: 'POST',
            data: (sendData ? sendData : null)
        }).done(function (data) {
            if (callback)
                callback(data);
        }).error(function (data) {
            if (errorhandler)
                errorhandler(data);
        });
    }
}