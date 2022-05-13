# README - Lizzo’s Juicy Juice Bar - The Server

## Test choices

I opted for not using the MVC design pattern due to the size of this server API. However if given more time and further data/user requests to deal with I would likely refactor to MVC.

Given more time I would also of liked to have carried out more testing and of course added custom error handling to provide better feedback to the client.


## Endpoints

- `/api`
  - GET - Returns a 200 and an `ok` message when the server is online

  - GET `/api/recipes`  responds with a list of all recipes. Includes a query to exclude recipes that contain any ingredients provided by the user ingredients.

  - GET `/api/recipes/:id` - responds with a single recipe based on the id provided, for example: 'localhost:9090/api/recipes/recipe-111'

 - POST `/api/recipes` - posts a new recipe to the recipes data and provides a new id to the recipe.

## Prerequisites

- Node
- npm

## Getting Started

Before attempting anything, ensure you have run `npm i` in this directory to install all dependencies.

## Testing

All tests are in the `test` directory. We use `jest` and `supertest` to test our server. Run `npm t` to execute tests.

## Running Dev Server

Run `npm run dev` to run the development server. It is configured to run on localhost:9090 by default.




