import { useContext } from "react";
import { Link } from "react-router-dom";

import { SubHeading } from "../components";
import AppContext from "../store/contex";
import "./AboutUsPage.css";

const AboutUsPage = () => {
    const appCtx = useContext(AppContext);

    const closePageHandle = () => {
        appCtx.toOpenPage();
    };

    return (
        <div className='app__bg section__padding app__aboutusPage'>
            <div className='app__aboutusPage-navbar'>
                <Link to='/' className='p__opensans' onClick={closePageHandle}>
                    Go back
                </Link>
            </div>

            <div className='app__aboutusPage-title'>
                <SubHeading title='Lets meet closer' />
                <h1 className='headtext__cormorant'>About Us</h1>
            </div>

            <div className='app__aboutusPage-container flex__center'>
                <p className='p__opensans'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis pharetra adipiscing ultrices vulputate posuere
                    tristique. In sed odio nec aliquet eu proin mauris et.
                </p>
                <p className='p__opensans'>
                    Adipiscing tempus ullamcorper lobortis odio tellus arcu
                    volutpat. Risus placerat morbi volutpat habitasse interdum
                    mi aliquam In sed odio nec aliquet.
                </p>
            </div>
        </div>
    );
};

export default AboutUsPage;
