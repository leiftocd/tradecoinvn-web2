import BannerImgLeft from '../../../../public/bannerLeft.png'
import BannerImgRight from '../../../../public/bannerRight.png'
import BannerLogo from '../../../../public/bannerlogo.png'
import BannerBtn from '../../../components/bannerBtn.jsx'
import BannerContentBg from '../../../../public/bannerContentBg.png'
import { useState } from 'react'
import Popup from '../../../components/popup/popup.jsx'
function Banner() {
        const [isOpen, setIsOpen] = useState(false);
    
        const handleOpen = () => setIsOpen(true);
        const handleClose  = () => setIsOpen(false);
  return (
    <>
    <section >
        <div className='banner flex flex-col relative -mb-[1px] mx-[auto]
        max-sm:py-[2.8rem]  max-sm:px-[0] max-sm:gap-[2rem]' 
         >
            <div className=" mx-[auto] res-img my-[0_2rem] max-sm:my-[1rem]! h-[8.5rem] ">
                <img src={BannerLogo} alt="" className=' max-w-[100%] object-cover h-full' loading='lazy'/>
            </div>
            <div className=" flex w-full justify-center
            max-sm:gap-[3rem]
            ">
                <div className=' banner-img w-full flex items-center max-w-[22%] 
                max-sm:hidden
                '>
                    <img src={BannerImgLeft} alt="banner" className=' w-full ml-[8%]' loading='lazy'/>
                </div>
                <div className=" flex items-center justify-center flex-col  px-[0] mx-[auto] max-w-1/2 gap-[1rem]
                max-sm:px-[0] res-w" >
                    <div className='  flex flex-col items-center 
                    max-sm:gap-[1rem]  max-sm:px-[0rem] m-mb-1'>
                        <div className="whitespace-pre-line inline-block text-[#00E9EC] text-center 
                            [webkit-text-stroke-width:1px] [webkit-text-stroke-color:#00E9EC] leading-[100%]
                            text-[4vw] font-[700] -tracking-[1px] uppercase text-shadow-glow font-roboto
                            max-sm:text-[3.5rem] max-sm:px-[0] max-sm:-tracking-[1px] max-sm:text-neon res-w-4k" >
                                Cộng đồng Crypto
                                top 1 Việt Nam
                        </div>      
                        <div className=' max-w-[14.7rem] hidden w-full items-center resMImg '>
                            <img src={BannerImgLeft} alt="banner" className=' w-full' loading='lazy'/>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center gap-[0]
                    max-sm:gap-[2rem] '>
                        <div className='w-full flex flex-col items-center justify-center gap-[1.5rem]  px-[1rem] 
                        max-sm:gap-[1rem] max-sm:px-[0] '>
                            <div className='flex items-center justify-center w-full  max-w-[60%] ml-[5.5%] btn-banner1
                            ' 
                            onClick={handleOpen}
                            >
                                <img src={BannerContentBg} alt="" className='imgBannerPc max-w-[100%] max-sm:max-w-[100%] btn-vip object-cover' loading='lazy'/>
                            </div>
                            <div className=' flex flex-col w-full gap-[1rem] items-center mid
                            max-sm:gap-[1rem] max-sm:px-[0]'>
                                <BannerBtn slug={'link-telegram-channel'}
                                    text="Kênh telegram TradeCoinVN"
                                    className=" bannerBtn flex items-center justify-center max-w-[60%]
                                    "
                                    spanBtn="textBtn  
                                    "
                                />
                                <BannerBtn href={'TraderVietNam'}   text="Nhóm facebook TradeCoinVN" 
                                    className=" bannerBtn flex items-center justify-center max-w-[60%] 
                                    "
                                    spanBtn="textBtn  
                                     "
                                />
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className=" banner-img w-full flex items-center max-w-[22%]
                max-sm:hidden
                ">
                    <img src={BannerImgRight} alt="banner" className=' w-full  mr-[8%] mt-[2%]' loading='lazy'/>
                </div>
            </div>
        </div>
        {isOpen && 
        <Popup />}
        <div className={`overlay ${isOpen ? 'active' : ''}`}
            onClick={handleClose}>
        </div>
    </section>
    </>
  )
}

export default Banner
