/* eslint-disable react/prop-types */
import Arrow from '../../../public/arrow.png';
import { useState } from 'react';
import React from 'react';

function BenefitBox({ spanText, srcImg, titleText, id, activeBox, onBoxClick, idBeneImg }) {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;
    const handleClick = () => {
        if (isMobile) {
            onBoxClick(id); 
        }
    };
    const isActive = activeBox === id;
    return (
        <>
            <div
                id="beneBox"
                className="flex flex-col gap-[2rem] max-w-[100%] w-full hv"
                onMouseEnter={!isMobile ? () => setIsHovered(true) : null}
                onMouseLeave={!isMobile ? () => setIsHovered(false) : null}
                onClick={isMobile ? handleClick : null} 
            >
                <div
                    className=" webfill flex rounded-[30px] bg-gradient-to-r from-[rgba(17,93,242,0.16)] to-[rgba(0,233,236,0.16)] bene-box relative pb-[4rem] "
                >
                    <div className={`flex flex-col relative w-full justify-center-center  ${
                                    isHovered || isActive ? 'pb-[0]' : 'pd-bene'
                                }`}>
                        <div className="beneBox-hidden w-full flex items-center border-white border-l-2 h-[60px]">
                            <p className="text-[60px] font-bold text-[#00E9EC] pl-[2rem] h-full text-center leading-[100%]">
                                {spanText}
                            </p>
                        </div>
                        <div className="p-[.5rem] pd-bene_h2">
                            <h2 className="mt-[1rem] mb-[1.5rem] text-left text-[30px] font-[700] text-white 
                             max-sm:mt-0 max-sm:mb-0 max-sm:pl-[1rem]" 
                             >{titleText.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}</h2>
                        </div>
                        <div className={`arrowM absolute ${
                                    isHovered || isActive ? 'translate-y-[0] top-[1rem] ' : 'top-[50%]' 
                                }`}>
                            <img
                                src={Arrow}
                                alt="arrow"
                                className={`transition-all duration-500 max-sm:max-w-[65%] ${
                                    isHovered || isActive ? '-rotate-180 opacity-[1] ' : 'rotate-0 opacity-[.6]'
                                }`}
                            />
                        </div>
                        <div id={idBeneImg} className="max-w-full relative opacity-[1] bottom-[1rem] mt-[2rem] max-sm:mt-0 flex justify-center" >
                            <img
                                src={srcImg}
                                alt="Benefit"
                                className={`w-full object-cover transition-all duration-300 mt-[1.5rem] bene-css_img  ${
                                    isHovered || isActive ? 'block' : 'hidden'
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        className={`arrow absolute transition-all duration-1000 ${
                            isHovered || isActive ? 'left-[88%] bottom-[88%]' : 'left-[40%] bottom-[0]'
                        }`}
                    >
                        <img
                            src={Arrow}
                            alt=""
                            className={`transition-all duration-300 ${
                                isHovered || isActive ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BenefitBox;