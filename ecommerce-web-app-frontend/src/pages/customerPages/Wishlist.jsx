import ProfileTabBar from "../../components/customerComponents/ProfileTabBar";
import WishListCard from "../../components/customerComponents/WishListCard";

const Wishlist = () => {
  return (
    <>
      <div className="flex justify-center">
        <ProfileTabBar />
      </div>
      <h2 className="text-center pt-12 text-3xl text-gray-500 font-bold mb-8">
        WishList
      </h2>
      <div className="min-h-[70vh] p-4">
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-2xl mt-20 font-bold text-center">
            Sorry, Your Wishlist is empty! Please add products
          </p>
        </div>
        {/* {Array(1)
          .fill(null)
          .map((index) => {
            return <WishListCard />;
          })} */}
      </div>
    </>
  );
};

export default Wishlist;
