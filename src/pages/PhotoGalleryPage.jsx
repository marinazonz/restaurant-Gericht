import { useContext } from "react";
import { Link } from "react-router-dom";

import { images } from "../constants";
import { SubHeading } from "../components";
import AppContext from "../store/contex";
import "./PhotoGalleryPage.css";

const PhotoGalleryPage = () => {
    const appCtx = useContext(AppContext);

    const closePageHandle = () => {
        appCtx.toOpenPage();
    };

    const galleryImages = [
        images.gallery01,
        images.gallery02,
        images.gallery03,
        images.gallery04,
    ];

    return (
        <div className='app__bg section__padding app__photoGalleryPage'>
            <div className='app__photoGalleryPage-navbar'>
                <Link to='/' className='p__opensans' onClick={closePageHandle}>
                    Go back
                </Link>
            </div>

            <div className='app__photoGalleryPage-title'>
                <SubHeading title='We cook with love' />
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
            </div>

            <div className='app__photoGalleryPage-container flex__center'>
                {galleryImages.map((img, ind) => {
                    return (
                        <div
                            className='app__gallery-images_card flex__center'
                            key={`gallery_image-${ind}`}
                        >
                            <img src={img} alt='gallery_img' />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PhotoGalleryPage;
