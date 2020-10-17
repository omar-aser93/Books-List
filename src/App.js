import React from 'react';
import './App.css';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import NavBar from './components/NavBar';
import BooksContextProvider from './contexts/BooksContext';


//wrap componets with the context & send them so they got rendered at index.html 
function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <NavBar />
        <BooksForm />
        <BooksList />      
      </BooksContextProvider>
      
    </div>
  );
}

export default App;
