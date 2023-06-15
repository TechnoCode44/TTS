function audioPreview(audioId) {
    path = `/audio/${audioId}.mp3`;

    const controls = document.createElement("audio");
    controls.controls = true;
    const preview = document.createElement("source");
    preview.src = path;
    preview.type = "audio/mpeg";

    controls.appendChild(preview);
    document.body.appendChild(controls)
}

function submit() {
    const text = document.getElementById("text");

    const json = JSON.stringify(
        {
            "text": text.value
        }
    );
    fetch("/tts", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        body: json
    })
    .then(response => response.json())
    .then(id => audioPreview(id));

    text.value = "";
}