import Hero from "../Layout/Hero";
import GenderCollectionSection from "../Products/GenderCollectionSection";
import NewArrivals from "../Products/NewArrivals";
import ProductDetails from "../Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
