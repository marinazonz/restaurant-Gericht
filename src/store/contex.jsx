import React, { useState, useContext } from "react";

const AppContext = React.createContext({
    appIsShown: true,
    modalforRigisterIsOpen: false,
    modalforBookTableIsOpen: false,
    toOpenPage: () => {},
    toggleModalforRegister: () => {},
    toggleModalforBookTable: () => {},
});

export const AppContextProvider = ({ children }) => {
    const [appIsShown, setAppIsShown] = useState(true);
    const [modalforRigisterIsOpen, setModalforRegisterIsOpen] = useState(false);
    const [modalforBookTableIsOpen, setModalforBookTableIsOpen] =
        useState(false);

    const openPage = () => {
        setAppIsShown(!appIsShown);
    };

    const toggleModalforRegister = () => {
        setModalforRegisterIsOpen(!modalforRigisterIsOpen);
    };

    const toggleModalforBookTable = () => {
        setModalforBookTableIsOpen(!modalforBookTableIsOpen);
    };

    const value = {
        appIsShown,
        modalforRigisterIsOpen,
        modalforBookTableIsOpen,
        toOpenPage: openPage,
        toggleModalforRegister,
        toggleModalforBookTable,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
