import { Navbar } from "./components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
    BookTable,
    RegisterForm,
} from "./container";
import ModalOverlay from "./ds/Modal";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";

import "./App.css";

function App() {
    const [modalforLogInIsOpen, setModalforLogInIsOpen] = useState(false);
    const [modalforBookTableIsOpen, setModalforBookTableIsOpen] =
        useState(false);
    const [appIsShown, setAppIsShown] = useState(true);

    const appWhole = (
        <>
            <Navbar
                openModalforLogIn={() => setModalforLogInIsOpen(true)}
                openModalforBooktable={() => setModalforBookTableIsOpen(true)}
            />
            {modalforLogInIsOpen && (
                <ModalOverlay onClose={() => setModalforLogInIsOpen(false)}>
                    <RegisterForm
                        onCloseModal={() => setModalforLogInIsOpen(false)}
                    />
                </ModalOverlay>
            )}
            {modalforBookTableIsOpen && (
                <ModalOverlay onClose={() => setModalforBookTableIsOpen(false)}>
                    <BookTable
                        onCloseModal={() => setModalforBookTableIsOpen(false)}
                    />
                </ModalOverlay>
            )}
            <Header openPageMenu={() => setAppIsShown(false)} />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </>
    );

    return (
        <div className='App'>
            {appIsShown && appWhole}
            <Routes>
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/about_us' element={<AboutUsPage />} />
                <Route path='/photo_gallery' element={<PhotoGalleryPage />} />
            </Routes>
        </div>
    );
}

export default App;
