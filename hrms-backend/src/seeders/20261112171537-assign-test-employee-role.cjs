'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('employees', 
      {
        roleId: '6e5f9a85-db29-4960-bba9-74a334fb3731',
        updatedAt: new Date(),
      },
      {
        id: "a1234567-1234-4234-8234-123456789abc",
        email: "john.doe@example.com",
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "employees",
      {
        roleId: null,
        updatedAt: new Date(),
      },
      {
        id: "a1234567-1234-4234-8234-123456789abc",
        email: "john.doe@example.com",
        roleId: "6e5f9a85-db29-4960-bba9-74a334fb3731",
      }
    );
  }
};
