function drawTables() {
    const urlParams = new URLSearchParams(window.location.search);

    let guildId = urlParams.get("serverid") ?? "No Server Specified"

    if (guildId === undefined || guildId === "No Server Specified") {
        document.getElementById("tags").innerHTML = "No Server Specified."
        return;
    }

    getJSON('https://api.paradaux.io/friendly-bot/tags/' + guildId, function(err, data) {
        console.log(data)

        data.forEach(element => {
            console.log(element);
            document.getElementById("tag-table").innerHTML += `
<tr style="word-break: break-all">
    <th>
        ${element.id}
    </th>
    <th>
        ${element.content}
    </th>
    <th>
        ${element.timeCreated} UTC
    </th>
</tr>`})
    });

    reloadParticles();
}

drawTables();









