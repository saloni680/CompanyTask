import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookDetails from './Components/BookDetails';
import EditBook from './Components/EditBook';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/book/:isbn" element={<BookDetails />} />
        <Route path="/edit/:isbn" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;