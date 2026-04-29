
import HeroSection from "../features/home/components/HeroSection"
import {FeaturedArrivals} from "../features/home/components/FeatureArrivals"
import CategoriesSection from "../features/categories/components/CategoriesSection"
import PromotionBanner from "../shared/components/PromotionBanner"
import ExploreProducts from "../features/home/Explore Products/components/ExploreProducts";
// import {FeaturedArrivals} from "../shared/components/FeaturedArrivals"

const HomePage = () => {
  

  return (
    <>
    <HeroSection/>
    <CategoriesSection/>
    <PromotionBanner/>
    <ExploreProducts/>
    <FeaturedArrivals/>
    </> 

  

  );

};

export default HomePage;