"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Features",
      [
        {
          name: "Single Player",
          icon: "https://store.akamai.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png",
        },
        {
          name: "Online Co-Op",
          icon: "https://store.akamai.steamstatic.com/public/images/v6/ico/ico_coop.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Features', null, {});
  },
};
