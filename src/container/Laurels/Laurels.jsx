import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

const AwardCard = ({ title, imgUrl, subtitle }) => (
    <div className='app__laurels_awards-card'>
        <img src={imgUrl} alt='award' />
        <div className='app__laurels_awards-card_content'>
            <p className='p__cormorant' style={{ color: "#DCCA87" }}>
                {title}
            </p>
            <p className='p__opensans'>{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => {
    return (
        <div className='app__bg app__wrapper section__padding' id='awards'>
            <div className='app__laurels_awards-info'>
                <SubHeading title='Awards & recognition' />
                <h1 className='headtext__cormorant'>Our Laurels</h1>

                <div className='app__laurels_awards'>
                    {data.awards.map((award, ind) => {
                        return (
                            <AwardCard
                                key={ind}
                                title={award.title}
                                imgUrl={award.imgUrl}
                                subtitle={award.subtitle}
                            />
                        );
                    })}
                </div>
            </div>

            <div className='app__wrapper_img'>
                <img src={images.laurels} alt='laurels_img' />
            </div>
        </div>
    );
};

export default Laurels;
