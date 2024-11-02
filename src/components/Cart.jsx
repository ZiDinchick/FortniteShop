function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart" onClick={handleBasketShow}>
      <img src="../../public/cart.svg" alt="cart" />
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
