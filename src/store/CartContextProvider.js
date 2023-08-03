import CartContext from "./Cart-context";

const CartContextProvider = (props) => {
  const handleAddItem = (item) => {};

  const handleRemoveItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
