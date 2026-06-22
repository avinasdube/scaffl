from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

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
