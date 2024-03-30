import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import WhyUs from "./components/WhyUs";
import ImageSlider from "./components/ImageSlider";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-6 w-full">
      <section className="px-4 sticky top-6 z-50 backdrop-blur-sm">
        <NavBar />
      </section>

      <section>
        <Landing />
      </section>

      <section>
        <Slider />
      </section>

      <section>
        <WhyUs />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <ImageSlider />
      </section>

      <section>
        <Team />
      </section>

      <section>
        <Pricing />
      </section>

      <section>
        <Testimonials />
      </section>
      <section>
        <CTA />
      </section>

      <Footer />
    </div>
  );
}

export default App;
