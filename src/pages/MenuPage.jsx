import "./MenuPage.css";
import { images, data } from "../constants";
import { MenuItem, SubHeading } from "../components";

const MenuPage = () => {
    return (
        <div className='app__bg app__menuPage'>
            <div className='app__menu-title'>
                <SubHeading title='Menu That Fits You Palatte' />
                <h1 className='headtext__cormorant'>Today's Special</h1>
            </div>

            <div className='app__menu-container flex__center'>
                <div className='app__menu-container_left flex__center'>
                    <h2>Wine & Beer</h2>
                    <div className='app__menu-container_left-item'>
                        {data.wines.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    title={item.title}
                                    info={item.tags}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className='app__menu-container_img'>
                    <img src={images.menu} alt='menu_cocktails' />
                </div>

                <div className='app__menu-container_right'>
                    <h2>Cocktails</h2>
                    <div className='app__menu-container_right-item'>
                        {data.cocktails.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    title={item.title}
                                    info={item.tags}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
