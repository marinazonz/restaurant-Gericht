import { Navbar } from "./components";
import { useState } from "react";

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
    LogInForm,
} from "./container";
import ModalOverlay from "./ds/Modal";

import "./App.css";

function App() {
    const [modalforLogInIsOpen, setModalforLogInIsOpen] = useState(false);
    const [modalforBookTableIsOpen, setModalforBookTableIsOpen] =
        useState(false);

    return (
        <div className='App'>
            <Navbar
                openModalforLogIn={() => setModalforLogInIsOpen(true)}
                openModalforBooktable={() => setModalforBookTableIsOpen(true)}
            />
            {modalforLogInIsOpen && (
                <ModalOverlay onClose={() => setModalforLogInIsOpen(false)}>
                    <LogInForm
                        onCloseModal={() => setModalforLogInIsOpen(false)}
                    />
                </ModalOverlay>
            )}
            {modalforBookTableIsOpen && (
                <ModalOverlay onClose={() => setModalforBookTableIsOpen(false)}>
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
        </div>
    );
}

export default App;
