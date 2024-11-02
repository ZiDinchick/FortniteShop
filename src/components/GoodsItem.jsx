function GoodsItem(props) {
  const { item, addToBasket = Function.prototype } = props;

  const {
    id,
    title,
    description,
    price,
    category: { image },
  } = item;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={image} alt={title} />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          type="button"
          className="btn brown"
          onClick={() => addToBasket({ id, title, price })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price}$
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
