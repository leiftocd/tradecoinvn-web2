import {  useRef } from "react";
import { Card } from "../../../components/Card/Card";
import { Slide } from "../../../components/Slide/Slide";
import "swiper/css/free-mode";
import {  Autoplay } from "swiper/modules";
import "./market.css";

function Market() {
  const exchanges = [
    {
      title: "BingX",
      img: "/bingX.png",
      link: "https://bingx.com/en/accounts/invite/VR26GG",
      des: "VR26GG",
    },
    {
      title: "OKX",
      img: "/okx.png",
      link: "https://www.okx.com/vi/join/81726041",
      des: "81726041",
    },
    {
      title: "MEXC",
      img: "/mexc.png",
      link: "https://www.mexc.com/vi-VN/register?inviteCode=mexc-121eFA",
      des: "121eFA",
    },
    {
      title: "Bybit",
      img: "/byBit.png",
      link: "https://www.bybitglobal.com/en/sign-up?affiliate_id=19986",
      des: "19986",
    },
    {
      title: "Binance",
      img: "/binance.png",
      link: "https://accounts.binance.com/vi/register?ref=DCAGBWQ6",
      des: "DCAGBWQ6",
    },
    {
      title: "Bitget",
      img: "/bitget.png",
      link: "https://www.bitget.com/vi/expressly?channelCode=TradeCoinVietnam&vipCode=gcr2&languageType=4",
      des: "grc2",
    },
    {
      title: "BingX",
      img: "/bingX.png",
      link: "https://bingx.com/en/accounts/invite/VR26GG",
      des: "VR26GG",
    },
    {
      title: "OKX",
      img: "/okx.png",
      link: "https://www.okx.com/vi/join/81726041",
      des: "81726041",
    },
    {
      title: "MEXC",
      img: "/mexc.png",
      link: "https://www.mexc.com/vi-VN/register?inviteCode=mexc-121eFA",
      des: "121eFA",
    },
    {
      title: "Bybit",
      img: "/byBit.png",
      link: "https://www.bybitglobal.com/en/sign-up?affiliate_id=19986",
      des: "19986",
    },
    {
      title: "Binance",
      img: "/binance.png",
      link: "https://accounts.binance.com/vi/register?ref=DCAGBWQ6",
      des: "DCAGBWQ6",
    },
    {
      title: "Bitget",
      img: "/bitget.png",
      link: "https://www.bitget.com/vi/expressly?channelCode=TradeCoinVietnam&vipCode=gcr2&languageType=4",
      des: "grc2",
    },
  ];

  const slideRef = useRef(null);

  const restartAutoplay = () => {
    if (slideRef.current && slideRef.current.autoplay) {
      slideRef.current.autoplay.start();
    }
  };

  const stopAutoplay = () => {
    if (slideRef.current && slideRef.current.autoplay) {
      slideRef.current.autoplay.stop();
    }
  };

  const handleTouchEnd = () => {
    setTimeout(restartAutoplay, 2000); // Khởi động lại autoplay sau 2 giây
  };

  return (
    <section id="market">
      <div className="w-full h-full mx-[auto] flex py-[3rem_0] justify-center max-w-[108rem] px-[3rem] market-res max-sm:px-[2rem]">
        <div className="warpper-content gap-[2rem] flex market-res">
          <div className="col-left">
            <div className="w-full relative">
              <div className="mb-[6rem]">
                <h2 className="text-[4.48rem] font-bold leading-[1.3] text-white max-xl:text-[3.75rem]">
                  LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
                </h2>
              </div>
              <div className="w-full flex flex-row gap-[2.5rem] justify-center market-col_res">
                <div className="p-[0_1.5rem]  flex flex-col gap-[4rem]">
                  <div className="relative">
                    <Card
                      img="/byBit.png"
                      title="Đăng kí tài khoản Bybit"
                      description={["Mã giới thiệu:", "19986"]}
                      slug="Bybit"
                    />
                    <img
                      className="absolute aspect-square max-w-[16.4rem] -top-[40%] -translate-x-1/2 translate-y-1/2 left-[-10%] 
                      max-lg:left-[-8%] max-lg:max-w-[13.4rem] max-lg:-top-[35%] max-md:max-w-[11.4rem] max-md:left-[-4%] max-md:-top-[35%]"
                      src="/smoker.png"
                    />
                  </div>
                  <div>
                    <Card
                      img="/binance.png"
                      title="Đăng kí tài khoản Binance"
                      description={["Mã giới thiệu:", "DCAGBWQ6"]}
                      slug="Binance"
                    />
                  </div>
                </div>
                <div className="p-[0_1.5rem] flex flex-col gap-[4rem]">
                  <div>
                    <Card
                      img="/bitget.png"
                      title="Đăng kí tài khoản Bitget"
                      description={["Mã giới thiệu:", "grc2"]}
                      slug="Bitget"
                    />
                  </div>
                  <div>
                    <Card
                      img="/bingX.png"
                      title="Đăng kí tài khoản BingX"
                      description={["Mã giới thiệu:", "VR26GG"]}
                      slug="BingX"
                    />
                  </div>
                </div>
                <div className="p-[0_1.5rem] flex flex-col gap-[4rem]">
                  <div>
                    <Card
                      img="/okx.png"
                      title="Đăng kí tài khoản OKX"
                      description={["Mã giới thiệu:", "81726041"]}
                      slug="OKX"
                    />
                  </div>
                  <div>
                    <Card
                      img="/mexc.png"
                      title="Đăng kí tài khoản MEXC"
                      description={["Mã giới thiệu:", "121eFA"]}
                      slug="MEXC"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                  <img className="max-w-[20rem]" src="./build.png" alt="" />
              </div>
            </div>
          </div>
          {/* Responsive */}
          <div className="market-slide">
            <h2 className="text-[3.2rem] font-bold leading-[1.3] my-[2rem_1.7rem] text-white">
              LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
            </h2>
            <div className="relative w-full p-[0_1.5rem_3rem] mket max-sm:p-[0_0_1.5rem]">
              <img
                className="absolute aspect-square max-w-[18%] -top-[2rem] -left-[2.5rem] z-10 left-img"
                src="/smoker.png"
              />
              <Slide.Root
                slidesPerView={3} 
                slidesPerGroup={1} 
                spaceBetween={10}
                touchRatio={1}
                modules={[Autoplay]} 
                speed={500}
                loop={true}
                loopAdditionalSlides={1} 
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                onSwiper={(swiper) => {
                  slideRef.current = swiper;
                }}
                onTouchStart={stopAutoplay}
                onTouchEnd={handleTouchEnd}
                className="slide-content"
                breakpoints={{
                  0: { slidesPerView: 2.5, spaceBetween: 5 },
                  375: { slidesPerView: 2.5, spaceBetween: 10 },
                  480: { slidesPerView: 3, spaceBetween: 15 },
                  640: { slidesPerView: 3, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
              >
                {exchanges.map((exchange, index) => (
                  <Slide.Item key={index}>
                    <div className="p-[1rem]">
                      <Card
                        img={exchange.img}
                        title={`Đăng kí tài khoản ${exchange.title}`}
                        description={["Mã giới thiệu:", exchange.des ]}
                        slug={exchange.title}
                        
                      />
                    </div>
                  </Slide.Item>
                ))}
              </Slide.Root>
              <div className="w-full flex justify-end">
                <img className="max-w-[12.5rem] h-[12.5rem]" src="./build.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;