import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
// import Bookmarks from './Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Bookmarks from './Bookmarks/Bookmarks'


function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookMarks = (blog) =>{
    // console.log('added bookmarks', blog)
    const newBookMark = [...bookmarks, blog]
    setBookmarks(newBookMark)
    console.log(bookmarks.length)
  }

  return (
    <>
      <Header></Header>
      
    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleBookMarks={handleBookMarks}></Blogs>

    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
