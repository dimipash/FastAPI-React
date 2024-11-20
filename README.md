# FastAPI + React
This project is a full-stack application built with FastAPI for the backend and React for the frontend. The backend provides a RESTful API for managing a list of fruits, while the frontend is a React application that interacts with the API to display and add fruits.

## Backend - FastAPI Setup

### Dependencies

- Python 3.9+

### Setup

- `mkdir backend`
- `cd backend`
- Create a virtual environment: `python3 -m venv venv`
- Activate the virtual environment:
  - Mac/Linux: `source ./venv/bin/activate`
  - Windows: `.\venv\Scripts\activate`
- Install the dependencies from [requirements.txt](./backend/requirements.txt)
  - `pip install -r requirements.txt`


### API Endpoints

- `GET /fruits`: Retrieve the list of fruits.

- `POST /fruits`: Add a new fruit to the list.