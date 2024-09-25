
import PropTypes from 'prop-types';



function Bookmark({bookmark}) {
    const {title} = bookmark
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
}

export default Bookmark;