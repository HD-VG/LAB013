import { sequelize } from '../database/database.js'; // Ajusta la ruta según la ubicación de este archivo
import { Medic } from '../models/Medic.js'; // Ajusta la ruta según la ubicación de este archivo

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // El parámetro force: true recrea la tabla si ya existe
    console.log("La base de datos y el modelo 'Medic' han sido sincronizados.");
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
