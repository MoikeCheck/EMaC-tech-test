const { rest } = require("lodash");
const supertest = require("supertest");
const server = require("../server");
const request = supertest(server);
const data = require("../data/data.json");

describe("GET /api", () => {
  test("/api", async () => {
    const { body } = await request.get("/api").expect(200);
    expect(body.message).toBe("ok");
  });
});

describe(" GET /api/recipes", () => {
  test("Returns array of all the menu recipes", async () => {
    const { body } = await request.get("/api/recipes").expect(200);
    body.forEach((recipe) => {
      expect(recipe).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          imageUrl: expect.any(String),
          instructions: expect.any(String),
          ingredients: expect.any(Array),
        })
      );
    });
  });
  test("Returns array of all the menu recipes", async () => {
    const { body } = await request.get("/api/recipes").expect(200);
    expect(body).toEqual(data);
  });
  test("Return array of menu recipes excluding the queried ingredients - excluded ingredient: apples, banana, carrot", async () => {
    const { body } = await request
      .get("/api/recipes?exclude_ingredients=apples,bananas,carrots")
      .expect(200);
    body.forEach((recipe) => {
      expect(
        recipe.ingredients.forEach((ingredient) => {
          expect(ingredient.name).not.toBe("apple juice");
          expect(ingredient.name).not.toBe("banana");
          expect(ingredient.name).not.toBe("carrot");
        })
      );
    });
  });
  test("Further query test - excluded ingredient: apples", async () => {
    const { body } = await request
      .get("/api/recipes?exclude_ingredients=apples")
      .expect(200);
    body.forEach((recipe) => {
      expect(
        recipe.ingredients.forEach((ingredient) => {
          expect(ingredient.name).not.toBe("apple juice");
        })
      );
    });
  });
  test("Further query test - excluded ingredient: flax", async () => {
    const { body } = await request
      .get("/api/recipes?exclude_ingredients=flax")
      .expect(200);
    body.forEach((recipe) => {
      expect(
        recipe.ingredients.forEach((ingredient) => {
          expect(ingredient.name).not.toBe("flax");
        })
      );
    });
  });
  test("Further query test - excluded ingredient: banana", async () => {
    const { body } = await request
      .get("/api/recipes?exclude_ingredients=banana")
      .expect(200);
    body.forEach((recipe) => {
      expect(
        recipe.ingredients.forEach((ingredient) => {
          expect(ingredient.name).not.toBe("banana");
        })
      );
    });
  });
});

describe(" GET /api/recipes/:id", () => {
  test("should respond with an object based on the id given by the user", async () => {
    const { body } = await request.get("/api/recipes/recipe-2").expect(200);
    expect(body).toEqual({
      id: "recipe-2",
      imageUrl: "http://www.images.com/22",
      instructions: "spin it, twist it, pull it, flick it... bop it!",
      ingredients: [
        { name: "lime", grams: 74 },
        { name: "demerara sugar", grams: 183 },
        { name: "mango juice", grams: 150 },
      ],
    });
  });
  test("Further id test - using a different id to previous test", async () => {
    const { body } = await request.get("/api/recipes/recipe-35").expect(200);
    expect(body).toEqual({
      id: "recipe-35",
      imageUrl: "http://www.images.com/1",
      instructions: "blend with oat milk and ice, sprinkle with salt",
      ingredients: [
        {
          name: "linseed",
          grams: 110,
        },
        {
          name: "mango juice",
          grams: 79,
        },
      ],
    });
  });
});

describe(" POST /api/recipes", () => {
  test("Posts new recipe to recipe array with own id", async () => {
    const newRecipe = {
      imageUrl: "http://www.images.com/21",
      instructions: "spin it, twist it, pull it, flick it... bop it!",
      ingredients: [
        { name: "strawberries", grams: 187 },
        { name: "kale", grams: 41 },
        { name: "apple juice", grams: 64 },
        { name: "coffee", grams: 146 },
        { name: "cocoa nibs", grams: 154 },
      ],
    };
    const { body } = await request
      .post("/api/recipes")
      .send(newRecipe)
      .expect(201);
  });
});
