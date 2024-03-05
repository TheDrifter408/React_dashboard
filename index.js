const express = require("express");

const cors = require("cors");

//cors options
let corsOptions = require("./cors/corsOptions.js");

const PORT = 3000;

let sequelize = require('./db/dbConfig.js');
let initModels = require('./models/init-models.js');
const { QueryTypes } = require("sequelize");

let models = initModels(sequelize);

const app = express();

//middleware
app.use(express.json())
//CORS policy
app.use(cors({
  origin:corsOptions
}));

app.get('/actors',async (req,res) => {
  const result = await sequelize.query(`SELECT first_name,last_name,COUNT(DISTINCT(title)) AS no_of_films FROM actor,film,film_actor WHERE actor.actor_id = film_actor.actor_id AND film.film_id = film_actor.film_id GROUP BY actor.actor_id`,{
    logging:console.log,
    plain:false,
    raw:true,
    type: QueryTypes.SELECT,
    order:[
      ['first_name','ASC']
    ]
  });
  res.status(200).send(result);
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
