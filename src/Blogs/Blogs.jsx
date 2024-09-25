import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';



const Blogs = ({handleBookMarks}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='md:w-2/3'>
            
            <h1 className='text-4xl text-blue-700'>Total Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMarks={handleBookMarks}></Blog>)
            }
        </div>
    )
}
Blogs.propTypes = {
    handleBookMarks: PropTypes.func
}
export default Blogs;