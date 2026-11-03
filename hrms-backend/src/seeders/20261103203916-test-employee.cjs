'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("Test@123", 12);
    await queryInterface.bulkInsert("employees", [
      {
        id: "a1234567-1234-4234-8234-123456789abc",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: hashedPassword,
        pancardNo: "TESTPAN001",
        aadharNo: "000000000000",
        gender: "male",
        dateOfJoining: "2026-01-01",
        phoneNumber: "0000000000",
        employee_code: "TEST001",
        isActive: true,
        sessionId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("employees", {
      id: "a1234567-1234-4234-8234-123456789abc",
      email: "john.doe@example.com",
    });
  }
};
