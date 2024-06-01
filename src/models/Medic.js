import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'; // Ajusta la ruta según la ubicación de este archivo

export const Medic = sequelize.define(
  'medics',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    speciality: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: 'xxx@gmail.com' // No recomendable usar un valor predeterminado para email
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    services: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    certifications: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'activo'
    }
  },
  {
    timestamps: false,
  }
);
