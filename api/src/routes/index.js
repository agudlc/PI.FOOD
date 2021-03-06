const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRoute = require("./recipes");
const dietTypes = require("./types");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipesRoute);
router.use("/types",dietTypes);



module.exports = router;