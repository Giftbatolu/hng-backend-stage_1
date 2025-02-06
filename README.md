# Number Classifier API

## Description
This API accepts a number as a query parameter and returns interesting mathematical properties about the number, including whether it's prime, perfect, Armstrong, or odd, and also provides a fun fact about the number

The API is built to handle CORS (Cross-Origin Resource Sharing) and ensures that all responses are provided in JSON format.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Steps to Set Up
To run this API locally, follow these steps:
1. Clone the repository:
```
git clone https://github.com/Giftbatolu/hng-backend-stage_1.git
```
2. Install the necessary dependencies: 
```
npm install
```
3. Start the local server by running:
```
 npm start
```
## Usage
To use the API, send a `GET` request to the following endpoint:
```
GET https://number-classfier.vercel.app/api/classify-number?num=351
```

## Deployment
The API has been deployed to vercel. You can access it at:
[https://number-classfier.vercel.app](https://number-classfier.vercel.app)

## API Documentation

- **Endpoint**: `/api/speciflt-number`
- **Method**: `GET`
- **Content-Type**: `application/json`
- **Response**: `JSON`

### Successful Response (200 OK)
```
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
### Error Response (400 Bad Request)
```
{
    "number": "alphabet",
    "error": true
}
```

## Acknowledgments
- Thanks to the HNG12 Slack workspace for providing the context for this task.
- Inspired by best practices for building and documenting public APIs.

## Contact
If you have any questions, feel free to contact us at sekinatoyelami@gmail.com.