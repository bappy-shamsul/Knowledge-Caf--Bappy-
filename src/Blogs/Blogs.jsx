import { useEffect, useState } from 'react';



const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className='md:w-2/3'>
            
            <h1 className='text-4xl text-blue-700'>Blogs</h1>
        </div>
    )
}
export default Blogs;