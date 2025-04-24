import { useState } from "react"
import Popup from '../../../components/popup/popup.jsx'
import Supp from '../../../../public/supp.png'
function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose  = () => setIsOpen(false);
  return (
    <section id="Footer" className='w-full flex items-center justify-center mx-[auto] py-[2rem_4rem]
    '>
        <div className=' max-w-[108rem] w-full flex justify-center flex-col items-center gap-[4rem] footer-res max-sm:gap-[3rem]'>
            <div className="f-top w-full flex justify-center flex-col gap-[8rem] px-[1rem]
            max-sm:gap-[3rem] max-sm:px-[0]">
                <div className=' flex flex-col gap-[3rem]'>
                    <div className=' flex gap-[.5rem] justify-center max-sm:gap-[1rem]'>
                        <a href="TradeCoinVietnam1" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem]
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='object-cover w-full'>
                                <path fill="#fff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/>
                            </svg>
                            <span className="max-sm:hidden absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow Group TradecoinVN1
                            </span>
                        </a>
                        <a href="TraderVietNam" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem] 
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='object-cover w-full'>
                                <path fill="#fff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/>
                            </svg>
                            <span className="max-sm:hidden absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow Group TraderVN
                            </span>
                        </a>
                        <a href="Website" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem]
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                                    <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clipRule="evenodd" />
                                    <path d="M4 24h40" />
                                    <path d="M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20" clipRule="evenodd" />
                                    <path d="M9.858 10.142A19.94 19.94 0 0 0 24 16a19.94 19.94 0 0 0 14.142-5.858m0 27.716A19.94 19.94 0 0 0 24 32a19.94 19.94 0 0 0-14.142 5.858" />
                                </g>
                            </svg>
                            <span className="max-sm:hidden absolute bottom-[150%] -left-[200%] -right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow On Website
                            </span>
                        </a>
                        <a href="X" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem]
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
                                <path fill="#fff" d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z" />
                            </svg>
                            <span className="max-sm:hidden absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow On X
                            </span>
                        </a>
                        <a  href="TikTok" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem]
                        hover:bg-[#000000] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" 
                            className='object-cover w-full'>
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M14 2a2 2 0 0 1 2 2a3.004 3.004 0 0 0 2.398 2.94a2 2 0 0 1-.796 3.92A7 7 0 0 1 16 10.325V16a6 6 0 1 1-7.499-5.81a2 2 0 0 1 .998 3.873A2.002 2.002 0 0 0 10 18a2 2 0 0 0 2-2V4a2 2 0 0 1 2-2"/></g>
                            </svg>
                            <span className="max-sm:hidden absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow On TikTok
                            </span>
                        </a>
                        <a href="link-telegram-channel" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem]
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="#fff" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z" />
                                </g>
                            </svg>
                            <span className="max-sm:hidden absolute bottom-[150%] -left-[200%] -right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow On Telegram TradecoinVN
                            </span>
                        </a>
                        <a href="Block24AI" className='relative group border-solid border-[#ffffff] border-[2px] rounded-[50%] p-[2px] w-[4rem] h-[4rem] flex items-center justify-center max-sm:w-[3.6rem] max-sm:h-[3.6rem]
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="#fff" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z" />
                                </g>
                            </svg>
                            <span className="absolute bottom-[150%] -left-[200%] -right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition max-sm:hidden">
                                Follow On Telegram Block24
                            </span>
                        </a>
                    </div>
                    <div className='btn-footer flex items-center w-full justify-center'>
                        <button onClick={handleOpen} className= ' rounded-[10px] bg-[rgba(28,28,28,.7)] shadow-[inset_2px_10px_20px_rgba(255,255,255,0.2)] backdrop-blur-[38.85px] border-2 border-[#00E9EC] hover:bg-gradient-to-r from-[rgba(17,93,242,0.48)] to-[rgba(0,233,236,0.48)] cursor-pointer px-[2.4rem] py-[2rem] flex items-center gap-[1rem] max-lg:px-[1.6rem] max-lg:py-[1.2rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="white">
                                <g fill="white" fillRule="evenodd">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"/></g>
                            </svg>
                            <span className=" text-white text-[2rem] font-bold 
                            max-lg:text-[1.4rem]">Liên hệ Support TradeCoinVN</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='f-bot flex w-full justify-between flex-col gap-[5rem] max-lg:gap-[4rem] max-md:gap-[3rem] max-sm:gap-[2rem]'>
                <div className='flex fixed bottom-[5%] right-[3%] sup-aura  max-sm:right-[5%] max-sm:bottom-[4%] max-sm:w-[6rem]! max-sm:h-[6rem]!'>
                    <button onClick={handleOpen} className= 'w-full h-full cursor-pointer group'>
                        <img src={Supp} alt="Support" className=""/>
                    </button>
                </div>
            </div>
        </div>
        {isOpen && 
        <Popup />}
        <div className={`overlay ${isOpen ? 'active' : ''}`}
            onClick={handleClose}>
        </div>
    </section>
    
  )
}

export default Footer
