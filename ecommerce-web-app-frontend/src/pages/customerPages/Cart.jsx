import CartCard from "../../components/customerComponents/CartCard";
import CartPriceCard from "../../components/customerComponents/CartPriceCard";

const Cart = () => {
  return (
    <>
      <h2 className="text-center pt-12 text-3xl text-gray-500 font-bold mb-8">
        Cart
      </h2>
      <div className="min-h-[78vh]">
        <div className="flex flex-wrap justify-center items-center">
          {/* <p className="text-2xl mt-40 font-bold text-center">
            Sorry, Your cart is empty! Please add products
          </p> */}
          <div className="flex flex-wrap justify-center gap-10 px-4">
            <div>
              {Array(1)
                .fill(null)
                .map((index) => (
                  <CartCard />
                ))}
            </div>
            <CartPriceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
