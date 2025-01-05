import OrderCard from "../components/OrderCard";
import ProfileTabBar from "../components/ProfileTabBar";

const Order = () => {
  return (
    <>
      <div className="flex justify-center">
        <ProfileTabBar />
      </div>
      <h2 className="text-center pt-12 text-3xl text-gray-500 font-bold mb-8">
        Your Orders
      </h2>

      <div className="p-6 min-h-[70vh]">
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-2xl mt-20 font-bold text-center">
            Sorry, You have not ordered any product yet !
          </p>
        </div>
        {/* {Array(1)
          .fill(null)
          .map((index) => {
            return <OrderCard />;
          })} */}
      </div>
    </>
  );
};

export default Order;
