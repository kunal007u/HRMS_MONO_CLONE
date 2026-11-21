'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    const routeIds = [
      "0a8ee2b1-4534-4fd8-a99d-e63116b3a257", // Employee
      "79e0a2c0-35f6-4ac0-a600-520cf7f5530d", // All Employees
      "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b", // Personal Details
      "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9", // Holidays
    ];

    await queryInterface.bulkInsert(
      "permissions",
      routeIds.map((routeId) => ({
        roleId: "6e5f9a85-db29-4960-bba9-74a334fb3731",
        routeId,
        canCreate: true,
        canRead: true,
        canUpdate: true,
        canDelete: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", {
      roleId: "6e5f9a85-db29-4960-bba9-74a334fb3731",
      routeId: {
        [Sequelize.Op.in]: [
          "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
          "79e0a2c0-35f6-4ac0-a600-520cf7f5530d",
          "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b",
          "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9",
        ],
      },
    });
  }
};
