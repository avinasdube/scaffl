from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# defining request model
class RequirementsRequest(BaseModel):
    text: str


# defining response model
class EntityResponse(BaseModel):
    entities: list[str]


# defining endpoints
@app.post("/analyze", response_model=EntityResponse)
def analyze(req: RequirementsRequest):
    return{
        "entities": ["User"]
    }
