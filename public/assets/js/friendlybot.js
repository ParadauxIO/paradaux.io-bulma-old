getJSON('https://api.paradaux.io/friendly-bot/stats', function(err, data) {
    document.getElementById("user-count").innerHTML = data.userCount;
    document.getElementById("guild-count").innerHTML = data.guildCount;
    document.getElementById("loc-count").innerHTML = data.codeLinesCount;
});