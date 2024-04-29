import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main from "./components/common/Main";
import { ProductItems } from "./components/products/ProductData";

function App() {
  //Some Functionality were done here which is the root top most component
  // steps
  // fetch the data from the database
  // console.log(ProductItems)

  // process with the  cart details
  const [cartItem, setCartItem] = useState(handleCartItems);

  // ADD TO CART
  const addToCart = (product) => {
    const exisitingProduct = cartItem.find((item) => item.id === product.id);

    //if the product exist, update the cartItem by increasing the quantity
    if (exisitingProduct) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...exisitingProduct, qty: exisitingProduct.qty + 1 }
            : item,
        ),
      );
    } else {
      // add a new cartItem
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (product) => {
    // get the product to be removed
    const exisitingProduct = cartItem.find((item) => item.id === product.id);
    if (exisitingProduct) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    }
  };

  // DECREASE CART QUANTITY
  const decreaseQuantity = (product) => {
    const exisitingProduct = cartItem.find((item) => item.id === product.id);
    // get the product quantity
    if (exisitingProduct.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...exisitingProduct, qty: exisitingProduct.qty - 1 }
            : item,
        ),
      );
    }
  };

  // store added cart items
  function handleCartItems() {
    // convert the returned carts to plain js object
    const addedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return addedCartItems || [];
  }
  useEffect(() => {
    // convert the stored carts in JSON format
    const storage = JSON.stringify(cartItem);
    localStorage.setItem("cartItems", storage);
  }, [cartItem]);

  return (
    <div className="any-class">
      <Main
        cartItem={cartItem}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        ProductItems={ProductItems}
      />

      {/* <LaunchCountDown/> */}
    </div>
  );
}

export default App;
