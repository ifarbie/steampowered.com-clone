"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SysReqs extends Model {
    static associate(models) {
      // define association here
      SysReqs.belongsTo(models.products),
      SysReqs.belongsTo(models.CategorySysReq,
        {foreignKey: "osId"}
      );
    }
  }
  SysReqs.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    osId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "CategorySysReq",
        key: "id",
      },
    },
    os: {
      allowNull: false,
      type: DataTypes.STRING
    },
    recommended: {
      allowNull: false,
      type: DataTypes.STRING, 
    },
    processor: {
      allowNull: false,
      type: DataTypes.STRING
    },
    memory: {
      allowNull: false,
      type: DataTypes.STRING
    },
    graphics: {
      allowNull: false,
      type: DataTypes.STRING
    },
    directX: {
      allowNull: true,
      type: DataTypes.STRING
    },
    storage: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: "SysReqs",
  }
);
return SysReqs;
};   
