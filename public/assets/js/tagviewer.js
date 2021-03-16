function drawTables() {
    const urlParams = new URLSearchParams(window.location.search);

    let guildId = urlParams.get("serverid") ?? "No Server Specified"

    if (guildId === undefined || guildId === "No Server Specified") {
        makeTableMessage("Error: No server specified.");
        return;
    }

    getJSON('https://api.paradaux.io/friendly-bot/tags/' + guildId, function(err, data) {


        if (!(data.length > 0)) {
            makeTableMessage("Error: No such server found.");
            return;
        }

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

function notify(message) {

    let table = document.getElementById("tag-table");
    let messageBox = document.createElement('textarea');
    messageBox.value = message;
    table.parentNode.insertBefore(messageBox, table.nextSibling);
    table.remove();
}



drawTables();









