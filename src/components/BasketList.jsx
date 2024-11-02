import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection">
      <li className="collection-item active brown">Basket</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className="collection-item">The basket is empty</li>
      )}
      <li className="collection-item active brown">
        Total cost: {totalPrice}$
        <button type="button" className="btn-small brown lighten-2 place-order">
          Place an order
        </button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
