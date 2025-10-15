import "boxicons/css/boxicons.min.css";
import { useState } from "react";
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenubar = () => {
    console.log("menu clicked")
   setToggleMenu(!toggleMenu)
  }

  return (
    <header className="flex justify-between p-10 lg:px-20">
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl m-0 ">
        MCODE
      </h1>
      <nav className="md:flex gap-10 font-semibold  hidden items-center">
        <a
          href="#"
          className="text-base transition-colors  tracking-wider hover:text-gray-300"
        >
          Company
        </a>
        <a
          href="#"
          className="text-base transition-colors  tracking-wider hover:text-gray-300"
        >
          Features
        </a>
        <a
          href="#"
          className="text-base transition-colors  tracking-wider hover:text-gray-300"
        >
          Resources
        </a>
        <a
          href="#"
          className="text-base transition-colors  tracking-wider hover:text-gray-300"
        >
          Docs
        </a>
      </nav>
      <button className="font-semibold px-6 py-3 hidden md:block bg-[#a7a7a7] rounded-full text-black transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGN UP
      </button>

      {/* mobile layout */}
      <button
        className="md:hidden text-4xl z-50 hover:text-gray-300"
        onClick={() => handleMenubar()}
      >
        <i className="bx bx-menu-alt-right"></i>
      </button>
      {toggleMenu && (
        <div className="fixed top-20 bottom-0 right-0 left-0 bg-black backdrop-blur-md bg-opacity-30 p-4 z-40 md:hidden">
          <nav className="flex flex-col  items-center gap-6">
            <a
              href="#"
              className="text-base transition-colors  tracking-wider hover:text-gray-300"
            >
              Company
            </a>
            <a
              href="#"
              className="text-base transition-colors  tracking-wider hover:text-gray-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-base transition-colors  tracking-wider hover:text-gray-300"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-base transition-colors  tracking-wider hover:text-gray-300"
            >
              Docs
            </a>
          </nav>
        </div>
      ) }
    </header>
  );
};
export default Navbar;
