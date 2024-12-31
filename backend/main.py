import uvicorn
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, field_validator
from typing import List
import re

class Fruit(BaseModel):
    name: str
    
    @field_validator('name')
    def validate_name(cls, value):
        if not value.strip():
            raise ValueError('Fruit name cannot be empty')
        if not re.match(r'^[a-zA-Z\s-]+$', value):
            raise ValueError('Fruit name can only contain letters, spaces and hyphens')
        return value.title()

class Fruits(BaseModel):
    fruits: List[Fruit]

app = FastAPI(
    title="Fruit API",
    description="API for managing fruits",
    version="1.0.0",
    contact={
        "name": "API Support",
        "email": "support@fruitapi.com"
    }
)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"fruits": []}

@app.get("/fruits", response_model=Fruits, tags=["fruits"])
def get_fruits():
    """Get all fruits"""
    return Fruits(fruits=memory_db["fruits"])

@app.post("/fruits", response_model=Fruit, status_code=status.HTTP_201_CREATED, tags=["fruits"])
def add_fruit(fruit: Fruit):
    """Add a new fruit"""
    memory_db["fruits"].append(fruit)
    return fruit

@app.put("/fruits/{fruit_id}", response_model=Fruit, tags=["fruits"])
def update_fruit(fruit_id: int, fruit: Fruit):
    """Update an existing fruit"""
    try:
        memory_db["fruits"][fruit_id] = fruit
        return fruit
    except IndexError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Fruit not found"
        )

@app.delete("/fruits/{fruit_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["fruits"])
def delete_fruit(fruit_id: int):
    """Delete a fruit"""
    try:
        memory_db["fruits"].pop(fruit_id)
    except IndexError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Fruit not found"
        )

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
