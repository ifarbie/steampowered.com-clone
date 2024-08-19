const { products, Category, PriceList, Feature, SysReqs, CategorySysReq, Review, ScrollThumbnail } = require('../models');

const getProductWhere = async (columnObject) => {
  return await products.findOne({
    attributes: ['id', 'name', 'short_description', 'release_date', 'developer', 'publisher', 'product_thumbnail', 'video', 'description', 'jumbotron_image'],
    where: {
      ...columnObject,
    },
    include: [
      {
        model: Category,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: PriceList,
        attributes: ['id', 'price', 'discount', 'offerName'],
      },
      {
        model: Feature,
        as: 'productFeatures',
        attributes: ['id', 'name', 'icon'],
      },
      {
        model: SysReqs,
        attributes: ['id', 'productId', 'recommended', 'osId', 'processor', 'memory', 'graphics', 'directX', 'storage', 'os'],
        include: [
          {
            model: CategorySysReq,
          },
        ],
      },
      {
        model: Review,
      },
      {
        model: ScrollThumbnail,
        attributes: ['id', 'productId', 'img', 'type'],
      },
    ],
  });
};

const getAllProducts = async () => {
  return await products.findAll({
    include: [
      {
        model: Category,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: PriceList,
        attributes: ['id', 'price', 'discount'],
      },
      {
        model: Feature,
        as: 'productFeatures',
        attributes: ['id', 'name', 'icon'],
        through: {
          attributes: [],
        },
      },
      {
        model: SysReqs,
        attributes: ['id', 'productId', 'recommended', 'osId', 'processor', 'memory', 'graphics', 'directX', 'storage'],
        include: [
          {
            model: CategorySysReq,
          },
        ],
      },
      {
        model: Review,
      },
      {
        model: ScrollThumbnail,
        attributes: ['id', 'productId', 'img', 'type'],
      },
    ],
  });
};

module.exports = {
  getProductWhere,
  getAllProducts,
};
