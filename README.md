# Simple CRUD API

This task is to implement simple CRUD API using in-memory database underneath.

## Getting Started
- clone this repo
- then pass into the directory you just created
- change branch from main to task-3_crud-api 
- install all dependencies (`npm install` or `yarn install`)
- run server on dev mode (`npm run start:dev` or `yarn start:dev`). Application will be available on http://localhost:8080
- run server on prod mode (`npm run start:prod` or `yarn start:prod`). Application will be available on http://localhost:8080

## Usage
In order to test the application, you can use postman.

1. API path `/person`:
    * **GET** `/person` or `/person/${personId}` should return all persons or person with corresponding `personId`
    * **POST** `/person` is used to create record about new person and store it in database
    * **PUT** `/person/${personId}` is used to update record about existing person
    * **DELETE** `/person/${personId}` is used to delete record about existing person from database
2. Persons are stored as `objects` that have following properties:
    * `id` — unique identifier (`string`, `uuid`) generated on server side
    * `name` — person's name (`string`, **required**)
    * `age` — person's age (`number`, **required**)
    * `hobbies` — person's hobbies (`array` of `strings` or empty `array`, **required**)

