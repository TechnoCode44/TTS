from pydantic import BaseModel

class Text(BaseModel): # JSON body for post request
    text: str