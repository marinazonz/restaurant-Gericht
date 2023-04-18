import "./BookTable.css";

const BookTable = ({ onCloseModal }) => {
    return (
        <section className='app_bookTable'>
            <div className='app__bookTable-contact'>
                <h1 className='app__bookTable-headtext'>Book the table</h1>
                <p className='p__opensans'>
                    9 W 53rd St, New York, NY 10019, USA
                </p>
                <p className='p__opensans'>+1 212-344-1230</p>
                <p className='p__opensans'>+1 212-555-1230</p>
            </div>

            <div className='app__bookTable-work'>
                <h1 className='app__bookTable-headtext'>Working Hours</h1>
                <p className='p__opensans'>Monday-Friday:</p>
                <p className='p__opensans'>08:00 am -12:00 am</p>
                <p className='p__opensans'>Saturday-Sunday:</p>
                <p className='p__opensans'>07:00am -11:00 pm</p>
            </div>

            <button
                type='button'
                className='custom__button'
                onClick={onCloseModal}
            >
                Close
            </button>
        </section>
    );
};

export default BookTable;
