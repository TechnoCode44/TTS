audio_count = int(open("audio.log", "r").read())

def audio_count_save(audio_count):
    with open("audio.log", "w") as log:
        log.write(str(audio_count))