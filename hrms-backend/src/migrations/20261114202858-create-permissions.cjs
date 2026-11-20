'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("permissions",{
       id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        allowNull: false,
        primaryKey: true,
       },
       canRead:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
       },
       canCreate:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        },
        canUpdate:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        },
        canDelete:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        },
        roleId:{
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          }
        },
        routeId:{
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'routes',
            key: 'id',
          }
        },
       createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
       },
       updatedAt:{
        type: DataTypes.DATE,
        allowNull: false,
       }  
    })
    await queryInterface.addConstraint("permissions", {
      fields: ["roleId", "routeId"],
      type: "unique",
      name: "unique_role_route",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("permissions");
  }
};
