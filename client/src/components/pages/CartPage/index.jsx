import React, { useEffect, useState } from "react";
import CartAndNavbar from "../../elements/CartAndNavbar/CartAndNavbar";
import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import usePageTitle from "../../../hooks/usePageTitle";
import { getCarts, deleteCart, deleteAllCarts, addCartPayment } from "../../../API/cart";

const formatPrice = (price) => {
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
};

const CartPage = () => {
  usePageTitle("Shopping Cart");

  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (carts) => {
    let total = 0;
    carts.forEach((cart) => {
      total += parseInt(cart.PriceList.price);
    });
    setTotalPrice(total);
  };

  const handleRemoveCart = async (id) => {
    try {
      await deleteCart(id);
      const updatedCarts = carts.filter((cart) => cart.id !== id);
      setCarts(updatedCarts);
      calculateTotalPrice(updatedCarts);
    } catch (error) {
      console.error(`Error removing cart with id ${id}:`, error);
    }
  };

  const handleRemoveAllCarts = async () => {
    try {
      await deleteAllCarts();
      setCarts([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error removing all carts:", error);
    }
  };

  const handlePayment = async () => {
    try {
      await addCartPayment();
      alert("Payment success");
      window.location.reload();
    } catch (error) {
      console.error("Error payment:", error);
    }
  }

  useEffect(() => {
    const handleGetCarts = async () => {
      try {
        const data = await getCarts();
        console.log(data);
        setCarts(data.data || []);
        calculateTotalPrice(data.data || []);
      } catch (error) {
        console.error("Error loading carts:", error);
      }
    };

    handleGetCarts();
  }, []);

  return (
    <div className="lg:flex lg:flex-col lg:justify-between lg:min-h-screen bg-[#1b2838]">
      <Header />
      <main>
        <CartAndNavbar cartCount={carts.length} />
        <div className="container_content">
          <div className="breadcrumb_container">
            <a href="#">
              Home{" "}
              <span className="span_breadcrumb">&gt; Your Shopping Cart</span>
            </a>
          </div>
          <div className="container_title">Your Shopping Cart</div>
          <div className="content_cart">
            {carts && carts.length === 0 ? (
              <div className="empty_cart_message">Your cart is empty.</div>
            ) : (
              <div className="cart_contents">
                <div className="left_col">
                  {carts.map((cart) => (
                    <div className="game_card_container" key={cart.id}>
                      <div className="game_card">
                        <div className="img_games">
                          <img
                            src={cart.PriceList.product.product_thumbnail}
                            alt={cart.PriceList.product.name}
                          />
                        </div>
                        <div className="detail_games">
                          <div className="games_details">
                            <div className="titles">
                              {cart.PriceList.product.name}{" "}
                              {cart.PriceList.offerName}
                            </div>
                            <div className="row_notes row_icon">
                              <div className="icon_container">
                                <span className="icon">
                                  <span className="windows_icon">
                                    <i className="fab fa-windows" />
                                  </span>
                                  <span className="apple_icon">
                                    <i className="fab fa-apple" />
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="price_container">
                              <span className="games_price">
                                <div className="price">
                                  {formatPrice(parseInt(cart.PriceList.price))}
                                </div>
                              </span>
                            </div>
                            <div className="row_notes layout_dd">
                              <div className="dropdown_container">
                                <div className="dropdown_layout dd_dialog_box dd_dialog_input">
                                  <div className="dropdown">
                                    <select
                                      name="option_gift"
                                      id="option_gift"
                                      className="dropdown"
                                    >
                                      <option value="#">For my account</option>
                                      <option value="#">
                                        For my account: private
                                      </option>
                                      <option value="#">This is a gift</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="crud_btn btn_add_rem">
                                <div className="add_btn">Add</div>|
                                <div
                                  className="remove_btn"
                                  onClick={() => handleRemoveCart(cart.id)}
                                >
                                  Remove
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="interaction_btn">
                    <button className="button_container">
                      Continue Shopping
                    </button>
                    <button
                      className="remove_container_btn"
                      onClick={handleRemoveAllCarts}
                    >
                      Remove all items
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="right_col">
              <div className="payment_card_container">
                <div className="row mb-10">
                  <div className="estimatetotal">Estimate total</div>
                  <div className="totalestimateprice">
                    {formatPrice(totalPrice)}
                  </div>
                </div>
                <div className="row mb-10 notePayment">
                  Sales tax will be calculated during checkout where applicable
                </div>
                <button className="payment_btn" onClick={handlePayment}>Continue to payment</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
