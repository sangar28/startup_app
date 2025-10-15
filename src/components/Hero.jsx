import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:mt-20 items-center min-h-[calc(90vh-6rem)] justify-between">
      <div
        data-aos="fade-right"
        className="max-w-xl ml-[5%] z-10 md:mt-[60%] mt-[90%] lg:mt-0"
      >
        <div className=" shadow-[0_0_30px_rgba(0,0,0,0.4)] bg-gradient-to-r from-[#656565] to-[#e99b63]  w-[95%] sm:w-48 h-10 relative rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i class="bx bx-diamond"></i> INTRODUCING
          </div>
        </div>
        <h1 className="flex items-center justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide my-8">
          Email For <br />
          Developers
        </h1>
        <p className="font-normal text-gray-300 tracking-wide text-base sm:text-lg md:text-xl lg:max-w-[25rem] xl:max-w-[30rem]">
          the best way to reach uumans instead of spam folders, dlever
          transactional and markting emails at scale
        </p>
        <div className="mt-10 flex  gap-2">
          <a
            type="button"
            className="py-2 sm:py-3 px-8 md:px-10 border-2 border-[#2a2a2a] flex items-center gap-1 font-semibold sm:text-lg text-sm transition-all duration-300 hover:bg-[#1a1a1a] rounded-full "
          >
            Documentation<i class="bx bx-link-external"></i>
          </a>
          <a
            type="button"
            className="py-2 sm:py-3 px-8 md:px-10 border-2 border-[#2a2a2a] flex items-center gap-1 font-semibold sm:text-lg text-sm bg-white text-black transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white rounded-full "
          >
            GetStarted<i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="2600"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/lJXsS7O-dxO5FIC3/scene.splinecode"
      />
    </main>
  );
};
export default Hero;
