import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../../../../API/cart";

const formatPrice = (price) => {
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
};

const ProdDetailOffers = (props) => {
  const [addToCartMessage, setAddToCartMessage] = useState("");
  const isLogin = useSelector((state) => state.auth.isLogin);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleAddToCart = async (offerIndex, productName, offerName) => {
    try {
      if (!isLogin) {
        window.location.href = "/login";
        return;
      }

      const response = await addToCart(offerIndex);
      console.log(response);
      setAddToCartMessage(`Added to cart! ${productName} ${offerName}`);
      alert(`Added to cart! ${productName} ${offerName}`);
      reloadPage();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to add item to cart.";
      console.error("Error adding to cart:", errorMessage);
      setAddToCartMessage(errorMessage);
      alert(errorMessage);
    }
  };

  const product = props.product;
  const PriceList = product?.PriceLists;

  const discount = (discountValue, normalPrice) => {
    return (discountValue / 100) * normalPrice;
  };

  const offersElements = PriceList?.map((offer, index) => (
    <div className="card p-4 mt-6 mb-2 rounded relative w-full" key={index}>
      <p className="text-2xl font-semibold">
        Buy {product?.name} {offer?.offerName}
      </p>
      <div className="text-base text-right absolute right-1">
        <div className="pl-3 pr-0 bg-black rounded text-sm">
          <span>
            {offer?.discount > 0 ? (
              <>
                <span className="bg-lime-300 p-2 text-lg text-green-500">
                  {offer?.discount} %{" "}
                </span>
                <span className="line-through ">
                  {formatPrice(offer?.price)}{" "}
                </span>
                <span className="text-discount">
                  {" "}
                  {formatPrice(
                    offer?.price -
                      discount(offer?.discount, parseInt(offer?.price))
                  )}{" "}
                </span>
              </>
            ) : (
              <span>{formatPrice(offer?.price)}</span>
            )}
            <button
              className="m-1 bg-buyBg py-2 px-4 rounded"
              onClick={() =>
                handleAddToCart(offer.id, product.name, offer.offerName)
              }
            >
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {addToCartMessage && <p>{addToCartMessage}</p>}
      {offersElements}
    </>
  );
};

export default ProdDetailOffers;
