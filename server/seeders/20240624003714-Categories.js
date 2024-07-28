'use strict';

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
      'Categories',
      [
        {
          name: 'open world',
          image: 'https://store.steampowered.com/categories/homepageimage/category/exploration_open_world?cc=us&l=english',
          color: 'gradient-blue',
        },
        {
          name: 'rpg',
          image: 'https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=english',
          color: 'gradient-yellow',
        },
        {
          name: 'action',
          image: 'https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english',
          color: 'gradient-green',
        },
        {
          name: 'racing',
          image: 'https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=english',
          color: 'gradient-red',
        },
        {
          name: 'puzzle',
          image: 'https://store.steampowered.com/categories/homepageimage/category/puzzle_matching/?cc=us&l=english',
          color: 'gradient-blue',
        },
        {
          name: 'anime',
          image: 'https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=english',
          color: 'gradient-yellow',
        },
        {
          name: 'simulation',
          image: 'https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=english',
          color: 'gradient-green',
        },
        {
          name: 'casual',
          image: 'https://store.steampowered.com/categories/homepageimage/category/casual?cc=us&l=english',
          color: 'gradient-cyan',
        },
        {
          name: 'strategy',
          image: 'https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=english',
          color: 'gradient-purple',
        },
        {
          name: 'adventure',
          image: 'https://store.steampowered.com/categories/homepageimage/category/adventure?cc=us&l=english',
          color: 'gradient-blue',
        },
        {
          name: 'visual novel',
          image: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
          color: 'gradient-yellow',
        },
        {
          name: 'survival',
          image: 'https://store.steampowered.com/categories/homepageimage/category/survival?cc=us&l=english',
          color: 'gradient-red',
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
