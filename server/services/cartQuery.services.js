const { Carts, PriceList, Users, products } = require('../models');

const getAllCartsByUserId = async (userId) => {
  return await Carts.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: Users,
        attributes: ['id', 'username', 'email'],
      },
      {
        model: PriceList,
        attributes: ['id', 'offerName', 'price', 'discount', 'productId'],
        include: [
          {
            model: products,
            attributes: ['id', 'name', 'product_thumbnail'],
          },
        ],
      },
    ],
  });
};

const getCartCountsWhere = async (columnObject) => {
  return await Carts.count({
    where: {
      ...columnObject,
    },
  });
};

const getCartWhere = async (columnObject) => {
  return await Carts.findOne({
    where: { 
      ...columnObject 
    },
    include: [
      {
        model: Users,
        attributes: ['id', 'username', 'email'],
      },
      {
        model: PriceList,
        attributes: ['id', 'price', 'discount', 'productId'],
        include: [
          {
            model: products,
            attributes: ['id', 'name'],
          },
        ],
      },
    ],
  });
}

module.exports = {
  getAllCartsByUserId,
  getCartCountsWhere,
  getCartWhere
};
