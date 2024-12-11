import Review from "../components/Raview";
import BreadCrumb from "../components/BreadCrumb";
import ProductCarousel from "../components/ProductCarousel";
import ProductDetails from "../components/ProductDetails";

function ProductView() {
  return (
    <>
      <div className="pt-20 mt-2 md:pl-10">
        <BreadCrumb />
      </div>
      <div className="lg:flex md:flex-wrap">
        <div className="lg:w-[600px] md:w-full h-[500px] p-4 pb-20 md:pl-14">
          <ProductCarousel />
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
