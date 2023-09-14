## Request Response Format

### Endpoint 1: /api

- **Request Format**

    1. Method: POST

    2. payload: {
        "name": "Amos Jenkins",
        "email": "Estelle.Roob@gmail.com",
        "password": "brao2dnf"
    }

- **Response Format**

    1. Response Body: {
        "data": {
            "name": "Amos Jenkins",
            "email": "Estelle.Roob@gmail.com",
            "password": "brao2dnf",
            "_id": "650281ef04b7a3f088c088a5",
            "createdAt": "2023-09-14T03:45:51.497Z",
            "updatedAt": "2023-09-14T03:45:51.497Z",
            "__v": 0
        }
    }

### Endpoint 2: /api/userId

- **Request Format**

    1. Method: GET

- **Response Format**

    1. Response Body: {
        "data": {
            "_id": "650281ef04b7a3f088c088a5",
            "name": "Amos Jenkins",
            "email": "Estelle.Roob@gmail.com",
            "password": "brao2dnf",
            "createdAt": "2023-09-14T03:45:51.497Z",
            "updatedAt": "2023-09-14T03:45:51.497Z",
            "__v": 0
        }
    }


### Endpoint 3: /api/user_id

- **Request Format**

    1. Method: PUT

    2. payload: {
        "name": "Axios Menkins",
        "email": "Estelle.Roob@gmail.com",
        "password": "brao2dnf"
    }

- **Response Format**

    1. Response Body: {
        "data":"user data has been updated successfully"
    }


### Endpoint 4: /api/user_id

- **Request Format**

    1. Method: DELETE

- **Response Format**

    1. Response Body: {
        "data": "This user has been deleted successfully"
    }



## Setup and Deployment

### Locally

    - Clone the repository: git clone [source_code](https://github.com/Amidsts/HNG10_task2.git)

    - Install dependencies: npm install 

    - create **.env** file in the root of the project, add the content of **.env.example** to **.env** file and supply all values

    - Start the server: node index.js

### Deployment

    - Deploy the API to a server of your choice (e.g: Render).

    - Set up environment variables for the production environment.

    - Configure the server to run the API application.

    - Ensure the server is accessible via a public URL.