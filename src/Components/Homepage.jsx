import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Homepage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://api.itbook.store/1.0/new');
        console.log(response);
        
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Check for updated book data from location state
  useEffect(() => {
    if (location.state && location.state.updatedBook) {
      const updatedBook = location.state.updatedBook;
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.isbn13 === updatedBook.isbn13 ? updatedBook : book))
      );
    }
  }, [location.state]);

  const handleDelete = async (isbn) => {
    // Simulate delete operation
    setBooks(books.filter(book => book.isbn13 !== isbn));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Inventory</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>ISBN</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.isbn13}>
              <td>{index + 1}</td>
              <td><Link to={`/book/${book.isbn13}`}>{book.title}</Link></td>
              <td>{book.subtitle ? book.subtitle : 'N/A'}</td>
              <td>{book.isbn13}</td>
              <td>{book.price}</td>
              <td>
                <Link to={`/edit/${book.isbn13}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(book.isbn13)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <em style={{color:"red"}}>click on title to see description</em>
    </div>
  );
};

export default Homepage;