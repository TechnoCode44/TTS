from fastapi import FastAPI
from gtts import gTTS
from query_json import *

app = FastAPI()

@app.get("/")
def index():
    return "Hi"

@app.post("/tts")
def tts(text: Text):
    speach = gTTS(text=text.text, lang="en", slow=False)
    speach.save("audio/test.mp3")