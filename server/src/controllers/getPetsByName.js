const { Mascota } = require("../db");
const { Op } = require("sequelize");

const getPetsByName = async (nombre) => {
  try {
    let nombreMinuscula = nombre.toUpperCase();
    if (nombreMinuscula) {
      console.log(nombre);
      // const petName = await Mascota.findOne({ where: 
      //   { nombre: { [Op.iLike]: `%${nombre}%` } } });

      const petName =  await Mascota.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`,
            },
          },
        });
      return petName
    }
    else {
      const mascotas = await Mascota.findAll();
    return mascotas;
    // return []
    }
  } catch (error) {
    throw { status: error?.status, message: error?.message };
  }
};

module.exports = getPetsByName;
