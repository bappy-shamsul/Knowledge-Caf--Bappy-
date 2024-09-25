
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <h1 className="text-4xl">Bookmarks: {bookmarks.length}</h1>
        
            {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
        
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};
export default Bookmarks;
