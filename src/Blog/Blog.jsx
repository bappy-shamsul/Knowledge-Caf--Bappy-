
import PropTypes, { object } from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {id, cover, title, author, author_img, reading_time, hashtags} = blog
    return (
        <div>
            <h3>ID: {id}</h3>
            <h3>Name: {author}</h3>
            <h3>Name: {reading_time}</h3>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;