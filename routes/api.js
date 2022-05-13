const apiRouter = require("express").Router();
const fs = require("fs");
const pluralize = require("pluralize");

apiRouter.get("/", (_, res) => {
  res.json({ message: "ok" });
});

apiRouter.get("/recipes", (req, res) => {
  fs.readFile("./data/data.json", "utf8", (err, data) => {
    let recipes = JSON.parse(data);
    if (err) console.log(err);
    if (req.query.exclude_ingredients) {
      let excludedIngredients = req.query.exclude_ingredients
        .split(",")
        .map((ingredient) => pluralize.singular(ingredient));
      let filteredRecipes = recipes.filter((recipe) => {
        return !recipe.ingredients.some((ingredient) => {
          return excludedIngredients.some((excluded) =>
            ingredient.name.includes(excluded)
          );
        });
      });
      res.status(200).send(filteredRecipes);
    } else {
      res.status(200).send(recipes);
    }
  });
});

apiRouter.get("/recipes/:id", (req, res) => {
  fs.readFile(`data/data.json`, "utf8", (err, data) => {
    const recipes = JSON.parse(data);
    if (err) console.log(err);
    else {
      recipes.forEach((recipe) => {
        if (recipe.id === req.params.id) {
          return res.status(200).send(recipe);
        }
      });
    }
  });
});

apiRouter.post("/recipes", (req, res) => {
  fs.readFile(`data/data.json`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const recipes = JSON.parse(data);
      const newRecipe = { id: `recipe-${recipes.length}`, ...req.body };
      console.log(req.body)
      const updatedRecipes = [...recipes];
      updatedRecipes.push(newRecipe);
      fs.writeFile(
        `data/data.json`,
        JSON.stringify(updatedRecipes, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(201).json({updatedRecipes});
          }
        }
      );
    }
  });
});

module.exports = apiRouter;
