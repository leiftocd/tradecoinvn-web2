/* eslint-disable react/prop-types */
import BenefitBox from "../../../../components/benefitBox/benefitBox.jsx";
import ImgFour from '../../../../../public/benefit/04.png';
import ImgFive from '../../../../../public/benefit/05.png';
import ImgSix from '../../../../../public/benefit/06.png';

function BenefitContainerB({ activeBox, onBoxClick }) {
    return (
        <>
            <div className="flex gap-[1rem] flex-[1] beneT-res">
                <BenefitBox 
                    id="4"
                    spanText="04"
                    idBeneImg="bene4"
                    srcImg={ImgFour}
                    titleText="Tin tức crypto nhanh"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox 
                    id="5"
                    spanText="05"
                    idBeneImg="bene5"
                    srcImg={ImgFive}
                    titleText="Tri ân & kết nối"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}

                />
                <BenefitBox 
                    id="6"
                    idBeneImg="bene6"
                    spanText="06"
                    srcImg={ImgSix}
                    titleText="Hệ sinh thái top 1"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}

                />
            </div>
        </>
    );
}

export default BenefitContainerB;