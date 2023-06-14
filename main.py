from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from gtts import gTTS
from query_json import *
from log_loader import *

app = FastAPI()
app.mount("/static", StaticFiles(directory="webpage"), name="static")

webpage = Jinja2Templates(directory="webpage")

@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return webpage.TemplateResponse("index.html", {"request": request})

@app.post("/tts")
def tts(text: Text):
    global audio_count
    speach = gTTS(text=text.text, lang="en", slow=False)
    audio_count += 1
    speach.save(f"audio/{audio_count}.mp3")
    audio_count_save(audio_count)