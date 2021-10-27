const { Router } = require('express');
const { Recipe } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res, next) => {
    
    res.send("soy get de recipes")
});

router.get("/id", (req, res, next) => {
    res.send("soy get id de recipes");
})

router.post("/", (req, res, next) => {
    const { name , resume } = req.body;
    return Recipe.create({name, resume}).
    then((newRecipe) => { 
        newRecipe;
        res.status(201).send(newRecipe)
    }).catch( (error) => next(error));
    
    // res.send("soy post de recipes");
})

module.exports = router;