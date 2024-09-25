
import PropTypes from 'prop-types';
import { RiBookmark3Line } from "react-icons/ri";

const Blog = ({blog, handleBookMarks}) => {
    // console.log(blog)
    const {id, cover, title, author, author_img, published_date, reading_time, hashtags} = blog
    
    // console.log(published_date)
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Title of the cover is ${title}`}/>
            
            <div className='flex justify-between'>
                <div className='flex justify-center'>
                    <img className='w-14 mt-4' src={author_img} />
                    <div className='ml-6 mt-4'>
                        <h3>{author}</h3>
                        <p>{published_date}</p>
                        
                    </div>
                </div>

                <div className='mt-4'>
                    <span>Reading Time: {reading_time}</span>
                    <button className='ml-4' onClick={() => handleBookMarks(blog)}><RiBookmark3Line  className='text-red-950 bg-red-950'></RiBookmark3Line></button>
                </div>

            </div>

            <div>
                    <h2 className='text-4xl'>{title}</h2>
                </div>
                <p>
                    {
                        hashtags.map((hash, idx)=> <span key={idx}><a href=''>#{hash}</a></span>)
                    }
                </p>
        </div>
    );
};

// Blog.propTypes = {
//     // blog: PropTypes.object.isRequired

// }

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func
    
}
export default Blog;