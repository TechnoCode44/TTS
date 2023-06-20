function audioPreview(path) {

    const controls = document.createElement("audio");
    controls.controls = true;
    const preview = document.createElement("source");
    preview.src = path;
    preview.type = "audio/mpeg";

    controls.appendChild(preview);
    document.body.appendChild(controls)
}

function audioDownload(path) {
    const link = document.createElement("a");
    link.href = path;
    link.download = "TTS.mp3"; // Placeholder file name in file dialog

    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Download";

    link.appendChild(button);
    document.body.appendChild(link)
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
    .then(id => {
        const path = `/audio/${id}.mp3`;

        audioPreview(path);
        audioDownload(path);
    });

    text.value = "";
}