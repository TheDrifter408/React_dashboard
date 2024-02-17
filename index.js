const express = require("express");

const cors = require("cors");

//cors options
let corsOptions = require("./cors/corsOptions.js");

const PORT = 3000;

let sequelize = require('./db/dbConfig.js');
let initModels = require('./models/init-models.js');

let models = initModels(sequelize);

const app = express();

//middleware
app.use(express.json())
//CORS policy
app.use(cors({
  origin:corsOptions
}));

app.get('/actors',async (req,res) => {
  const actors = await models.actor.findAll({
    attributes:{
      exclude:['last_update']
    }
  });
  res.status(200).send(actors);
})

app.get('/films', async (req,res) => {
  const films = await models.film.findAll({
    attributes:{
      exclude: ['language_id','original_language_id','rental_duration','rental_rate','replacement_cost','special_features','last_update']
    }
  });
  res.status(200).send(films);
})

app.use('/',(req,res) => {
  res.json({"message":"This is a test"})
})

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
})
