import { Navbar } from "./components";
import { useContext } from "react";
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
import AppContext from "./store/contex";

function App() {
    const appCtx = useContext(AppContext);

    const appWhole = (
        <>
            <Navbar />
            {appCtx.modalforRigisterIsOpen && (
                <ModalOverlay onClose={() => appCtx.toggleModalforRegister()}>
                    <RegisterForm />
                </ModalOverlay>
            )}
            {appCtx.modalforBookTableIsOpen && (
                <ModalOverlay onClose={() => appCtx.toggleModalforBookTable()}>
                    <BookTable />
                </ModalOverlay>
            )}
            <Header />
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
            {appCtx.appIsShown && appWhole}
            <Routes>
                <Route path='/' element={appCtx.appIsShown && appWhole} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/about_us' element={<AboutUsPage />} />
                <Route path='/photo_gallery' element={<PhotoGalleryPage />} />
            </Routes>
        </div>
    );
}

export default App;
