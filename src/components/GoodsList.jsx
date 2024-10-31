import { GoodsItem } from "./GoodsItem";

function GoodList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="shop">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodList };
