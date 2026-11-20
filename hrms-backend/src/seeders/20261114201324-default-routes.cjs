'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('routes', [
      {
        id: "30197083-e969-4797-8e27-2a44d97c380a",
        name: "Admin Dashboard",
        parentRouteId: null,
        childRouteId: null,
        priority: 1,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ]) 
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('routes', { id: "30197083-e969-4797-8e27-2a44d97c380a" });
  }
};
