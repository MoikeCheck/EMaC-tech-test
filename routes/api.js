const apiRouter = require("express").Router();
const fs = require("fs");

jsonReader = (filePath, cb) => {
  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
};

apiRouter.get("/", (_, res) => {
  res.json({ message: "ok" });
});

// Include a query (`?exclude_ingredients=apples,bananas,carrots`)

apiRouter.get("/recipes", (req, res) => {
  fs.readFile("./data/data.json", "utf8", (err, data) => {
    let excludedIngredients = req.query.exclude_ingredients.split(",");
    let recipes = JSON.parse(data);
    let filteredRecipes = recipes.filter((recipe) => {
      return !recipe.ingredients.some((ingredient) => {
        return excludedIngredients.includes(ingredient.name);
      });
    });
    if (err) console.log(err);
    if (excludedIngredients.includes("apples")) {
      res.status(200).send(filteredRecipes);
    } else {
      // res.status(200).send(recipes);
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

const newRecipe = {
  id: "recipe-100",
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

apiRouter.post("/recipes", (req, res) => {
  fs.readFile(`data/data.json`, "utf8", (err, data) => {
    const recipes = JSON.parse(data);
    if (err) {
      console.log(err);
    } else {
      let newData = recipes.push(newRecipe);
      console.log(newData);
      fs.writeFile(
        `data/data.json`,
        JSON.stringify(newData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(" file successfully written");
          }
        }
      );
    }
    res.send({ status: success });
  });
});

module.exports = apiRouter;
