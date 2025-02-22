import Review from "../../components/customerComponents/Review";
import BreadCrumb from "../../components/customerComponents/BreadCrumb";
import ProductCarousel from "../../components/customerComponents/ProductCarousel";
import ProductDetails from "../../components/customerComponents/ProductDetails";
import AddBuyBtn from "../../components/customerComponents/AddBuyBtn";

function ProductView() {
  return (
    <>
      <div className="pt-20 mt-2 md:pl-10">
        <BreadCrumb />
      </div>
      <div className="lg:flex md:flex-wrap">
        <div className="lg:w-[600px] md:w-full h-[500px] p-4 pb-20 md:pl-14">
          <ProductCarousel />
          <AddBuyBtn />
        </div>
        <div className="pt-3 lg:mx-12 md:mx-4 sm:mx-2 p-3">
          <ProductDetails />
          <h5 className="text-xl mt-8 my-2 font-semibold">
            Ratings and Reviews
          </h5>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
}

export default ProductView;
