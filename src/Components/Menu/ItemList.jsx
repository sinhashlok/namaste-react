import { CDN_URL } from "../../utils/constants";
import { addItem, removeItem, clearCart } from "../../utils/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ list }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <ul>
        {list?.map((item) => {
          const { id, name, price, defaultPrice, imageId, isVeg, description } =
            item?.card?.info;
          return (
            <div
              key={name}
              className="flex py-8 border-b-2 border-indigo-200 last:border-0 justify-between"
            >
              <div className="flex flex-col w-[60%]">
                <h1 className="text-lg font-semibold mb-2">
                  {name} {isVeg == 1 ? "🟢" : "🔴"} -{" "}
                  <span className="font-semibold text-indigo-600">
                    ₹{price === undefined ? defaultPrice / 100 : price / 100}
                  </span>
                </h1>
                <li>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐️
                </li>
                <li className="text-sm text-slate-500">{description}</li>
              </div>
              <div className="flex flex-col align-middle items-center">
                <img
                  src={CDN_URL + imageId}
                  className="w-[300px] ml-4 rounded-lg shadow-xl"
                />
                {cartItems?.filter((cartItem) => cartItem.id === id).length ===
                0 ? (
                  <button
                    className="bg-indigo-500 font-bold px-4 py-2 mt-[-20px] w-[102px] text-white rounded-md hover:bg-indigo-600 hover:shadow-md transition-all"
                    onClick={() => handleAddItem(item?.card?.info)}
                  >
                    ADD +
                  </button>
                ) : (
                  <div>
                    <button
                      className="bg-indigo-500 font-bold py-2 mt-[-20px] w-[34px] text-white rounded-md rounded-tr-none rounded-br-none hover:bg-indigo-600 hover:shadow-md transition-all"
                      onClick={() => handleRemoveItem(item?.card?.info)}
                    >
                      -
                    </button>
                    <button className="bg-white font-bold py-2 mt-[-20px] w-[34px] hover:shadow-md transition-all">
                      {
                        cartItems?.filter((cartItem) => cartItem.id === id)
                          .length
                      }
                    </button>
                    <button
                      className="bg-indigo-500 font-bold py-2 mt-[-20px] w-[34px] text-white rounded-md rounded-tl-none rounded-bl-none hover:bg-indigo-600 hover:shadow-md transition-all"
                      onClick={() => handleAddItem(item?.card?.info)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
