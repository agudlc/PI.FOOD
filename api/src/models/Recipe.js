const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    healthyLevel: {
      type: DataTypes.STRING,
    },
    Steps: {
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
