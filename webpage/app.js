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
    .then(id => console.log(id));

    text.value = ""
}