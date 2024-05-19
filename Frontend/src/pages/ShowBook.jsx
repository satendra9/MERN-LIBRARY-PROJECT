import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'

const showBook = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(()=> {
        setLoading(true);
        axios.get(`http://localhost:5000/books/${id}`).
        then((res)=>{
            setBook(res.data);
            setLoading(false);
        }).catch((error)=> {
            console.log(error);
            setLoading(false);
        })
    },[])
  return (
    <div className='p4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Show Book</h1>
        {loading ? (
            <Spinner/>
        ) : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-grey-500 '>Id -</span>
                    <span>{book._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-grey-500 '>Title -</span>
                    <span>{book.title}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-grey-500 '>Publish Year -</span>
                    <span>{book.publishYear}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-grey-500 '>Created Time -</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-grey-500 '>Last Updated Time -</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            </div>
        )
    }

    </div>
  )
}

export default showBook