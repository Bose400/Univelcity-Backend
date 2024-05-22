import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "./elements/BackButton";
import Spinner from "./elements/Spinner";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3005/api/book/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex justify-center p-12'>
          <div className='p-4 px-12 border border-3 border-sky-400 shadow-black isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5'>
            <h1 className='mt-2 text-2xl lg:text-4xl font-bold'>
              Title: {book.title}
            </h1>
            <img
              className='my-4 border-white border-4'
              src={book.image}
              alt={book.title}
            />
            <h1 className=' text-2xl font-bold'>Author: {book.author}</h1>
            <h1 className=' text-2xl font-bold'>Published in: {book.publishedYear}</h1>
            <h1 className=' text-lg font-bold'> Created at: {new Date(book.createdAt).toString()}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
