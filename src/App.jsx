import Navbar from "./components/navbar/Navbar";
import "./index.css"

const App = () => {
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
    </main>
  );
}
export default App