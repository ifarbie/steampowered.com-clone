const { Carts, BridgeProductOwned } = require('../models');
const { CartQuery } = require('../services');

const getCarts = async (req, res) => {
  try {
    const userId = req.currentUser.id;
    
    const carts = await CartQuery.getAllCartsByUserId(userId);
    const cartCount = await CartQuery.getCartCountsWhere({ userId });

    if (!carts.length) {
      return res.status(200).json({
        code: 200,
        message: 'Your carts are empty',
        cartCount: cartCount,
      });
    }

    return res.status(200).json({
      code: 200,
      message: 'Get all your carts are success',
      data: carts,
      cartCount: cartCount,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const addCart = async (req, res) => {
  try {
    const { priceListId } = req.body;
    const userId = req.currentUser.id;

    const existingCart = await CartQuery.getCartWhere({ priceListId, userId });
    if (existingCart) {
      return res.status(400).json({
        code: 400,
        message: 'You already have this item in your cart',
      });
    }

    const cart = await Carts.create({
      priceListId,
      userId,
    });

    const newCart = await CartQuery.getCartWhere({ id: cart.id });

    return res.status(201).json({ code: 201, message: 'Cart created successfully', data: newCart });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteCartbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.currentUser.id;

    const cart = await CartQuery.getCartWhere({ id, userId });
    if (!cart) {
      return res.status(200).json({
        code: 200,
        message: 'Cart not found',
      });
    }

    await cart.destroy();
    return res.status(200).json({
      code: 200,
      message: 'Cart deleted successfully',
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteAllCarts = async (req, res) => {
  try {
    const userId = req.currentUser.id;
    await Carts.destroy({ where: { userId } });

    return res.status(200).json({
      code: 200,
      message: 'All carts data deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const cartsPayment = async (req, res) => {
  try {
    const userId = req.currentUser.id;

    const existingCarts = await CartQuery.getAllCartsByUserId(userId);
    if (!existingCarts.length) {
      return res.status(400).json({
        code: 400,
        message: 'You have no item in your cart',
      });
    }

    for (const cart of existingCarts) {
      const { productId } = cart.PriceList.dataValues;
      const { userId } = cart.dataValues;
      const existingProductOwned = await BridgeProductOwned.findOne({ where: { productId, userId } });
      if (existingProductOwned) {
        return res.status(400).json({
          code: 400,
          message: 'You already have owned this product',
        });
      }

      await BridgeProductOwned.create({
        productId,
        userId,
      });
    }

    await Carts.destroy({ where: { userId } });

    return res.status(201).json({
      status: 201,
      message: 'berhasil menambahkan ke product owned!',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getCarts,
  addCart,
  deleteCartbyId,
  deleteAllCarts,
  cartsPayment,
};
