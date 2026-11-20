'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('routes',{
      id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentRouteId:{
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'routes',
          key: 'id',
        }
      },
      childRouteId:{
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'routes',
          key: 'id',
        }
      },
      isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("routes");
  }
};
