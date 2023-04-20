import { useContext, useState } from "react";
import "./MenuPage.css";
import { Link } from "react-router-dom";
import { data } from "../constants";
import { MenuItem, SubHeading } from "../components";
import { BookTable } from "../container";
import ModalOverlay from "../ds/Modal";
import AppContext from "../store/contex";

const MenuPage = () => {
    const appCtx = useContext(AppContext);

    const closePageHandle = () => {
        appCtx.toOpenPage();
    };

    return (
        <div className='app__bg section__padding app__menuPage'>
            {appCtx.modalforBookTableIsOpen && (
                <ModalOverlay onClose={() => appCtx.toggleModalforBookTable()}>
                    <BookTable
                        onCloseModal={() => appCtx.toggleModalforBookTable()}
                    />
                </ModalOverlay>
            )}
            <div className='app__menuPage-navbar'>
                <div className='app__menuPage-navbar-links'>
                    <p
                        className='p__opensans'
                        onClick={() => appCtx.toggleModalforBookTable()}
                    >
                        Order
                    </p>
                </div>

                <div className='app__menuPage-navbar-divLine' />

                <div className='app__menuPage-navbar-links'>
                    <Link
                        to='/'
                        className='p__opensans'
                        onClick={closePageHandle}
                    >
                        Go back
                    </Link>
                </div>
            </div>

            <div className='app__menuPage-title'>
                <SubHeading title='Menu That Fits You Palatte' />
                <h1 className='headtext__cormorant'>Today's Special</h1>
            </div>

            <div className='app__menuPage-container flex__center'>
                <div className='app__menuPage-container_left flex__center'>
                    <h2>Wine & Beer</h2>
                    <div className='app__menuPage-container_left-item'>
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

                <div className='app__menuPage-container_right'>
                    <h2>Cocktails</h2>
                    <div className='app__menuPage-container_right-item'>
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
