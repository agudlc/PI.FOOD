const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    Resumendelplato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Puntuación: {
      type: DataTypes.FLOAT,
    },
    Niveldecomidasaludable: {
      type: DataTypes.STRING,
    },
    Pasoapaso: {
      type: DataTypes.STRING,
    }
  })
  // sequelize.define("tipoDeDieta", {
  //   ID: {
  //     type: DataTypes.UUID,
  //     allowNull: false,
  //   },
  //   Nombre: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },

  // });
};
