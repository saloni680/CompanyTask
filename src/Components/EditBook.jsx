// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './BookDetails.css'; // Ensure the CSS file is correctly named

// const EditBook = () => {
//   const { isbn } = useParams();
//   const navigate = useNavigate();
//   const [book, setBook] = useState(null);
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [price, setPrice] = useState('');

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`https://api.itbook.store/1.0/books/${isbn}`);
//         setBook(response.data);
//         setTitle(response.data.title);
//         setAuthor(response.data.authors);
//         setPrice(response.data.price);
//       } catch (error) {
//         console.error('Error fetching book', error);
//       }
//     };

//     fetchBook();
//   }, [isbn]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedBook = {
//       title,
//       authors: author,
//       price,
//       isbn13: isbn, // Include the ISBN if needed for the update
//     };

//     try {
//       // Replace this URL with your actual API endpoint for updating the book
//       await axios.put(`https://api.itbook.store/1.0/books/${isbn}`, updatedBook);
      
//       // Navigate back to the homepage after successful update
//       navigate('/', { state: { updatedBook } });
//     } catch (error) {
//       console.error('Error updating book', error);
//       // Optionally, you can show an error message to the user
//     }
//   };

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="book-details-container">
//       <h2>Edit Book</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Author:</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="text"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditBook;







import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookDetails.css'; // Ensure the CSS file is correctly named

const EditBook = () => {
  const { isbn } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://api.itbook.store/1.0/books/${isbn}`);
        setBook(response.data);
        setTitle(response.data.title);
        setAuthor(response.data.authors);
        setPrice(response.data.price);
      } catch (error) {
        console.error('Error fetching book', error);
      }
    };

    fetchBook();
  }, [isbn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      authors: author,
      price,
      isbn13: isbn, // Include the ISBN if needed for the update
    };

    // Simulate the update by navigating back with the updated book data
    navigate('/', { state: { updatedBook } });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;