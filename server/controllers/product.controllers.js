const { ProductQuery } = require('../services');

const getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await ProductQuery.getProductWhere({ id });
    if (!data) {
      throw new Error('Data tidak ditemukan');
    }

    return res.status(200).json({
      code: 200,
      message: 'success',
      data,
    });
  } catch (error) {
    return res.status(404).json({
      code: 404,
      message: 'Page Not Found',
      error,
    });
  }
};

const getAllProduct = async (req, res) => {
  const data = await ProductQuery.getAllProducts();
  return res.status(200).json({
    code: 200,
    message: 'success',
    data: data,
  });
};

module.exports = { getProductDetail, getAllProduct };
