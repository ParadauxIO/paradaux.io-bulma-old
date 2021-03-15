var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

getJSON('https://api.paradaux.io/friendly-bot/stats', function(err, data) {
    document.getElementById("user-count").innerHTML = data.userCount;
    document.getElementById("guild-count").innerHTML = data.guildCount;
    document.getElementById("loc-count").innerHTML = data.codeLinesCount;
});