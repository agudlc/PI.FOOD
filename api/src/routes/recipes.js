const { Router } = require('express');
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
    res.send("soy post de recipes");
})

module.exports = router;