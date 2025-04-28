/* eslint-disable react/prop-types */
import BenefitBox from "../../../../components/benefitBox/benefitBox.jsx";
import ImgOne from '../../../../../public/benefit/01.png';
import ImgTwo from '../../../../../public/benefit/02.png';
import ImgThree from '../../../../../public/benefit/03.png';

function BenefitContainerT({ activeBox, onBoxClick }) {
    return (
        <>
            <div className="flex gap-[1rem] flex-[1] beneB-res">
                <BenefitBox 
                    id="1"
                    spanText="01"
                    srcImg={ImgOne}
                    idBeneImg="bene1"
                    titleText="Tỷ lệ thắng cao"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox
                    id="2"
                    idBeneImg="bene2"
                    spanText="02"
                    srcImg={ImgTwo}
                    titleText={`Trader top Việt Nam`}       
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox 
                    id="3"
                    idBeneImg="bene3"
                    spanText="03"
                    srcImg={ImgThree}
                    titleText="Tín hiệu miễn phí"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
            </div>
        </>
    );
}

export default BenefitContainerT;