import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem, clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col mx-[320px] mt-10 max-md:mx-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2 max-md:text-xl">Cart</h1>
        {cartItems.length != 0 && (
          <button
            className="bg-red-400 px-4 py-2 font-semibold text-white rounded-md hover:bg-red-600 transition-all"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        )}
      </div>
      <div>
        {cartItems.length === 0 ? (
          <h1 className="text-xl font-semibold text-slate-400">
            Your cart is empty
          </h1>
        ) : (
          cartItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center border-b-2 border-indigo-200 last:border-0 py-4"
              >
                <div className="flex items-center">
                  <div>
                    <img
                      src={CDN_URL + item?.imageId}
                      className="w-[150px] rounded-md mr-2"
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                    <h1 className="text-sm text-slate-500">
                      ₹{item.price / 100 || item.defaultPrice / 100}
                    </h1>
                  </div>
                </div>
                <button
                  className="bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-600 transition-all"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
