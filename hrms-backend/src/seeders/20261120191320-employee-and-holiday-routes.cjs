'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("routes", [
      {
        id: "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
        name: "Employee",
        parentRouteId: null,
        childRouteId: null,
        priority: 2,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "79e0a2c0-35f6-4ac0-a600-520cf7f5530d",
        name: "All Employees",
        parentRouteId: "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
        childRouteId: null,
        priority: 1,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b",
        name: "Personal Details",
        parentRouteId: "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
        childRouteId: null,
        priority: 2,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9",
        name: "Holidays",
        parentRouteId: null,
        childRouteId: null,
        priority: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    const { Op } = Sequelize; 

    //Op.in is used to specify a condition where the value of a column should match any value in a given array. In this case, it is used to delete multiple records from the "routes" table based on their IDs.
    await queryInterface.bulkDelete("routes", {
      id:{
        [Op.in]: [
          "79e0a2c0-35f6-4ac0-a600-520cf7f5530d",
          "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b",
        ],
      }
    })


    await queryInterface.bulkDelete("routes", {
      id: {
        [Op.in]: [
          "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
          "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9",
        ],
      },
    });

  }
};
