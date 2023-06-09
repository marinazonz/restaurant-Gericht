import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort,
} from "react-icons/bs";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import AppContext from "../../store/contex";
import "./Gallery.css";

const Gallery = () => {
    const scrollRef = useRef(null);
    const appCtx = useContext(AppContext);

    const openPageHandler = () => {
        appCtx.toOpenPage();
    };

    const galleruImages = [
        images.gallery01,
        images.gallery02,
        images.gallery03,
        images.gallery04,
    ];

    const scroll = (direction) => {
        let { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className='app__gallery flex__center'>
            <div className='app__gallery-content'>
                <SubHeading title='Instagram' />
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans' style={{ marginTop: "2rem" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat mattis ipsum turpis elit elit scelerisque egestas
                    mu.
                </p>
                <button
                    type='button'
                    className='custom__button'
                    onClick={openPageHandler}
                >
                    <Link to='/photo_gallery'>View More</Link>
                </button>
            </div>

            <div className='app__gallery-images'>
                <div className='app__gallery-images_container' ref={scrollRef}>
                    {galleruImages.map((img, ind) => {
                        return (
                            <div
                                className='app__gallery-images_card flex__center'
                                key={`gallery_image-${ind}`}
                            >
                                <img src={img} alt='gallery_img' />
                                <BsInstagram className='gallery__image-icon' />
                            </div>
                        );
                    })}
                </div>
                <div className='app__gallery-images_arrows'>
                    <BsArrowLeftShort
                        className='gallery__arrow-icon'
                        onClick={() => scroll("left")}
                    />
                    <BsArrowRightShort
                        className='gallery__arrow-icon'
                        onClick={() => scroll("right")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
