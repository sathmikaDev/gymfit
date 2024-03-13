import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="py-6 w-full">
      <NavBar />
      <Landing />
      <Slider />
      <WhyUs />
    </div>
  );
}

export default App;
