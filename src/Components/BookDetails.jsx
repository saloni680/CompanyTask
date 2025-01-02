import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookDetails.css'; // Ensure the CSS file is correctly named

const BookDetails = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://api.itbook.store/1.0/books/${isbn}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details', error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [isbn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>No book found!</div>;
  }

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.authors}</p>
      <p><strong>ISBN:</strong> {book.isbn13}</p>
      <p><strong>Price:</strong> {book.price}</p>
      <p><strong>Description:</strong> {book.desc || 'No description available.'}</p>
    </div>
  );
};

export default BookDetails;