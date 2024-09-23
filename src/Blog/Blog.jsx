
import PropTypes, { object } from 'prop-types';

const Blog = ({blog}) => {
    // console.log(blog)
    const {id, cover, title, author, author_img, published_date, reading_time, hashtags} = blog
    
    console.log(published_date)
    return (
        <div>
            <img className='w-5/6 h-2/6' src={cover} alt={`Title of the cover is ${title}`}/>
            
            <div className='flex justify-between'>
                <div className='flex justify-center'>
                    <img className='w-14' src={author_img} />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{published_date}</p>
                        
                    </div>
                </div>

                <div>
                    <span>Reading Time: {reading_time}</span>
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
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;