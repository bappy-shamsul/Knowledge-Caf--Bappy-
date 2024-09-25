
import PropTypes from 'prop-types';



function Bookmark({bookmark}) {
    const {title} = bookmark
    return (
        <div className='bg-sky-200 m-4 p-4'>
            <h4 className='text-2xl text-black-600'>{title}</h4>
        </div>
    );
}

export default Bookmark;