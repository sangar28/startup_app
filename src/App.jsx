import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <main>
      {/* Gradiant image */}
      <img
        src="/gradient.png"
        alt="gradient_img"
        className="absolute top-0 right-0 opacity-60 -z-10"
      />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_30px_#e99b63] -rotate-[30deg] -z-10"></div>
      <Navbar />
      <Hero />
    </main>
  );
};
export default App;
