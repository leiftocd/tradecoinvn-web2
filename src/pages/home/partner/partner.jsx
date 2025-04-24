import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FreeMode, Autoplay } from "swiper/modules";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { Slide } from "../../../components/Slide/Slide";
import './partner.css'
import { useRef, useState } from "react";

const Partner = () => {
  const swiperRef = useRef(null);
  const [slidesConfig, setSlidesConfig] = useState({
    slidesPerView: 4.3,
    spaceBetween: 0,
    
    
  });
  useIsomorphicLayoutEffect(() => {
    const updateSlidesConfig = () => {
      if (window.innerWidth <= 990 && window.innerWidth > 640) {
        setSlidesConfig({ slidesPerView: 3.3, spaceBetween: 10 });
      } else if (window.innerWidth >= 640) {
        setSlidesConfig({ slidesPerView: 4, spaceBetween: 0 });
      } else {
        setSlidesConfig({ slidesPerView: 3, spaceBetween: 0 });
      }

      swiperRef.current?.swiper?.update();
    };

    updateSlidesConfig();
    window.addEventListener("resize", updateSlidesConfig); 
    return () => window.removeEventListener("resize", updateSlidesConfig); 
  }, []);
  return (
    <section id="partner">
        <div className="partner-p w-full h-full mx-[auto] flex py-[3rem] justify-center max-w-[108rem] max-sm:py-[1.5rem]! ">
        <div className="warpper-content w-full flex flex-wrap gap-[3rem]">
          <div className="w-full mb-[2rem] max-sm:mb-[1rem]">
            <h2 className="text-center text-6xl text-white font-bold max-sm:text-[3.2rem]">
              ĐỐI TÁC CHIẾN LƯỢC
            </h2>
          </div>
          <div className="slide-res w-full p-[0_1.5rem_3rem] glow-slide">
            <div className="p-[2rem] w-full relative max-sm:p-[1rem_0]">
              <h3 className="text-[2rem] text-white font-bold text-center pb-[1rem]">
                Partners
              </h3>
              <Slide.Root
                {...slidesConfig}
                grabCursor={true}
                modules={[FreeMode, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  nextEl: ".swiper-button-next-2",
                  prevEl: ".swiper-button-prev-2",
                  uniqueNavElements: true,
                }}
                className="slide-content"
              >
                <Slide.Item>
                  <div className="slide-item  bg-[#0A86E8]!">
                    <img
                      className="slide-image max-w-[80%]!"
                      src="/slide/slide1.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="slide-image max-w-[65%]!"
                      src="/slide/slide2.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item bg-[#083025]!">
                    <img
                      className="slide-image"
                      src="/slide/slide3.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="slide-image"
                      src="/slide/slide4.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit "
                      src="/slide/slide5.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item ">
                    <img
                      className="slide-image rounded-[50%]  max-w-full!"
                      src="/slide/slide6.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="slide-image rounded-[50%] max-w-full!"
                      src="/slide/slide7.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item bg-gray-800 border-[2px] border-white h-full w-full">
                    <span 
                      className="font-bold text-[6.4rem] text-[#00e9ec] flex items-center justify-center max-sm:text-[3.2rem]"
                    >50+</span>
                  </div>
                </Slide.Item>
              </Slide.Root>
              <button className="swiper-button-prev-2 rounded-full ">
                <IoIosArrowBack className="w-full h-full object-cover fill-white" />
              </button>
              <button className="swiper-button-next-2 rounded-full">
                <IoIosArrowForward className="w-full h-full object-cover fill-white" />
              </button>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Partner;
