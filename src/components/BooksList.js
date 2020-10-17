import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookDetail from "./BookDetail";

const BooksList = () => {

  const { Books } = useContext(BooksContext);         //get the state from the context
  
  return Books.length ? (               //pass data to the detail component if the state is not empty   
    <div className='list'>     
      <ul>
        {Books.map((Book) => (
          <BookDetail Book={Book} key={Book.id} />                  
        ))}
      </ul>
      <p>* click on the title or auther name to edit it's value</p>
    </div>
  ) : (
    <div className="noBooks">There is no Books to read ... Please enter new ones</div>
  );
};

export default BooksList;
