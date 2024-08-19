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
     */
    await queryInterface.bulkInsert(
      "SysReqs",
      [
        {
          productId: 1,
          recommended: false,
          osId: 1,
          os: 'Windows 10 64-bit',
          processor: "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
          memory: "8GB",
          graphics: "RTX 3090",
          directX: "16GB",
          storage: "512GB",
        },
        {
          productId: 1,
          recommended: true,
          osId: 1,
          os: 'Windows 11 64-bit',
          processor: "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
          memory: "16GB",
          graphics: "RTX 3090",
          directX: "16GB",
          storage: "1TB",
        },
        {
          productId: 2,
          recommended: false,
          osId: 1,
          os: 'Windows 10 64-bit',
          processor: "Intel i5-3500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
          memory: "8GB",
          graphics: "RTX 3090",
          directX: "16GB",
          storage: "512GB",
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
