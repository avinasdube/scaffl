# Backend

This backend is a lightweight FastAPI service that currently provides a simple analysis endpoint for the frontend.

## Current status

The implementation is intentionally minimal at this stage. The API accepts a text payload and returns a placeholder list of entities.

## Project structure

- `main.py` - FastAPI application and endpoint definitions
- `requirements.txt` - Python dependencies for the backend

## Features

- FastAPI application with CORS enabled for the frontend
- `POST /analyze` endpoint
- Basic request/response models using Pydantic

## Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source venv/Scripts/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Run locally

Start the development server with:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- `http://localhost:8000/docs` for Swagger UI
- `http://localhost:8000/redoc` for ReDoc

## API

### `POST /analyze`

Request body:

```json
{
  "text": "Describe the requirements here"
}
```

Response:

```json
{
  "entities": ["User"]
}
```

## Notes

- CORS is currently configured to allow requests from `http://localhost:3000`.
- The current implementation returns a static placeholder response and will be expanded as backend logic is developed.
