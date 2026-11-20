'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [
      {
        id: "e7cae9ad-4d89-4b15-97eb-91ca4d8e6ba1",
        roleId: "6e5f9a85-db29-4960-bba9-74a334fb3731",
        routeId: "30197083-e969-4797-8e27-2a44d97c380a",
        canCreate: true,
        canRead: true,
        canUpdate: true,
        canDelete: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permissions', { id: "e7cae9ad-4d89-4b15-97eb-91ca4d8e6ba1" });
  }
};
