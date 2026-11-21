"use strict";

const routePaths = [
  {
    id: "30197083-e969-4797-8e27-2a44d97c380a",
    path: "/admin-dashboard",
  },
  {
    id: "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
    path: null, // Employee is a menu group.
  },
  {
    id: "79e0a2c0-35f6-4ac0-a600-520cf7f5530d",
    path: "/employees",
  },
  {
    id: "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b",
    path: "/personal-details",
  },
  {
    id: "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9",
    path: "/holidays",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    for (const route of routePaths) {
      await queryInterface.bulkUpdate(
        "routes",
        {
          path: route.path,
          updatedAt: new Date(),
        },
        {
          id: route.id,
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "routes",
      {
        path: null,
        updatedAt: new Date(),
      },
      {
        id: {
          [Sequelize.Op.in]: routePaths.map(
            (route) => route.id
          ),
        },
      }
    );
  },
};