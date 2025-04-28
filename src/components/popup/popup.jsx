/* eslint-disable react/no-unescaped-entities */
import '../popup/popup.css'
function Popup() {
  return (
    <div className='popup fixed z-100 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-full flex items-center justify-center max-w-[60%]
    max-sm:max-w-[85%] max-md:max-w-[80%] max-lg:max-w-[70%] 
    '>
        <div className=' p-[4.8rem_6rem_4.8rem_6rem] max-sm:p-[3rem_3rem_3rem_3rem]
        rounded-[35px] border border-[#00E9EC] bg-[rgba(32,32,32,0.85)] backdrop-blur-[5.95px]'>
        <div className='flex flex-col gap-[1rem]'>
            <div className='flex items-center justify-center max-sm:items-start max-sm:justify-start'>
                <span>• Lưu ý</span>
            </div>
            <ul>
                <li>1/ Bạn có thắc mắc hãy nhắn cho mình bằng cách bấm vào nút "Click vào đây"</li>
                <li>2/ Mình là support TradeCoinVN, trả lời khi online. Lưu contact để tránh scam. Admin không nhắn trước, không hỏi tài khoản/mật khẩu/tài sản.</li>
                <li>3/ Nhắn nội dung "Vào premium" để vào nhóm VIP trading.</li>
            </ul>
        </div>
        <div className='btn-footer flex items-center w-full justify-center py-[5rem]'>
                    <a href='link-telegram-support' rel="noreferrer" className= ' rounded-[10px] bg-[rgba(28,28,28,0.19)] shadow-[inset_0px_17px_56.7px_-42px_rgba(255,254,254,0.32)] backdrop-blur-[38.85px] border-2 border-[#00E9EC] hover:bg-gradient-to-r from-[rgba(17,93,242,0.48)] to-[rgba(0,233,236,0.48)] cursor-pointer px-[4rem] py-[1.5rem] flex items-center gap-[1rem] max-lg:px-[1.6rem] max-lg:py-[1.2rem] flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="white">
                            <g fill="white" fillRule="evenodd">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"/></g>
                        </svg>
                        <span className=" text-white text-[16px] font-bold 
                        max-lg:text-[1.4rem]">CLICK VÀO ĐÂY</span>
                    </a>
                </div>
        <div className='flex flex-col gap-[1rem]'>
            <div className='flex items-center justify-center max-sm:items-start max-sm:justify-start'>
                <span>• Để nhắn tin </span>
            </div>
            <ul>
                <li>1/ Bạn cần có tài khoản telegram, nếu chưa hãy tải Telegram và tạo tài khoản.</li>
                <li>2/ Nhấn "Click vào đây" để chat, đặt câu hỏi hoặc thả icon để bắt đầu!</li>
            </ul>
            </div>
        </div>
    </div>
  )
}
export default Popup
