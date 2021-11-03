const { default: axios } = require('axios');
const { Router } = require('express');
const { Recipe } = require('../db');
// const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const YOUR_API_KEY = "e8d5f2b2036e4b58b5986b1350472a78"; 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res, next) => {
    const title = req.query.title;
    const recipeApi = axios.get('https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2?apiKey=e8d5f2b2036e4b58b5986b1350472a78')
    .then((recipeApi) => {

     res.send(recipeApi)
    }).catch((err) => next(err.toJSON()))
    // console.log(recipeApi.results);

    
});

router.get("/id", (req, res, next) => {
    res.send("soy get id de recipes");
})

router.post("/", (req, res, next) => {
    
    res.send("soy post de recipes");
})

module.exports = router;