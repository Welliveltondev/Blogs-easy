import React, { useEffect, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useRef } from 'react'

const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image,setImage] = useState(false)
  const [title,setTitle] = useState('')
  const [subTitle,setSubTitle] = useState('')
  const [category,setCategory] = useState('Startup')
  const [isPublished,setIsPulblished] = useState(false)
  
  const generaContent = async () => {

  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
    }
  },[])
  return (
    <form onSubmit={onSubmitHandler}
      className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} 
          className='mt-2 h-16 rounded cursor-pointer'
          alt="" />
          <input onChange={(e)=>setImage(e.target.value[0])} 
          type="file" id='image' hidden required />
        </label>

        <p className='mt-4'>Blog Title</p>
        <input 
        type="text" 
        placeholder='Type here' required 
        className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
        onChange={e => setTitle(e.target.value)}
        value={title}/>

        <p className='mt-4'>Subtitle</p>
        <input 
        type="text" 
        placeholder='Type here' required 
        className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
        onChange={e => setSubTitle(e.target.value)}
        value={subTitle}/>

        <p className='mt-4'>blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div ref={editorRef}></div>
          <button type='button'
          onClick={generaContent}
          className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black px-4 py-1.5 rounded hover:underline cursor-pointer'>
              Generate with AI
          </button>
        </div>
        <p className='mt-4 '>Blog category</p>
        <select name="category"
        className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded' >
          <option value="">Select category</option>
          {blogCategories.map((item,index)=>{
            return <option index={index} value={item}>{item}</option>
          })}
        </select>
      
        <div className='flex gap-2 mt-4'>
          <p className=''>Publish Now</p>
          <input className='scale-125 cursor-pointer'
          onChange={e => setIsPulblished(e.target.value)}   
          type="checkbox" checked={isPublished} />
        </div>
        <button className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm hover:scale-102'
          type='submit'>
            Add Blog
          </button>
      </div>
    
    </form>
  )
}

export default AddBlog