'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SysReqs', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      osId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CategorySysReqs',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      os: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      recommended: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      processor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      memory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      graphics: {
        allowNull: false,
        type: Sequelize.STRING
      },
      directX: {
        allowNull: true,
        type: Sequelize.STRING
      },
      storage: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('SysReqs');
  }
};