import AboutUs from "../Components/AboutUs"
import Categories from "../Components/Categories"
import FamousProduct from "../Components/FamousProduct"
import Footer from "../Components/Footer"
import { HeroSection } from "../Components/HeroSection"
import NavBar from "../Components/NavBar"
import NewsLetter from "../Components/NewsLetter"
import ProductGallery from "../Components/ProductGallery"
import TopPicks from "../Components/TopPicks"
import WhyBuyFromUs from "../Components/WhyBuyFromUs"
import WishedVideosGame from "../Components/WishedVideosGame"
import { categoryGallery1 , categoryGallery2} from "../utils/HomePageData"
const Home = () => {
  return (
    <>
      <div className="home-container pt-6 pb-5">
          <NavBar/>
          <HeroSection/>
          <Categories/>
          <ProductGallery gallery={categoryGallery1} />
          <TopPicks/>
          <ProductGallery gallery={categoryGallery2} />
          <WishedVideosGame/>
          <FamousProduct/>
          <WhyBuyFromUs/>
          <AboutUs/>
          <NewsLetter/>
          <Footer/>
      </div>
    </>
  )
}

export default Home