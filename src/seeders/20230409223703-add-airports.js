"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     
     * queryInterface : helps seeder to communicate to mysql and
     * execute query
    */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Kempegowda International Airport, Bengaluru (BLR)",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mangalore International Airport (IXE)",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysore Airport (MYQ)",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indra Gandhi Internation Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
