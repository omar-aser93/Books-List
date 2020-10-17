import React, { createContext, useState ,useEffect  } from "react";
import uuid from "react-uuid";

//create the context that will be used on the other components
export const BooksContext = createContext();
  
//the component that will wrap the components at the app.js
const BooksContextProvider = (props) => {
  const [Books, setBooks] = useState([               // the stae that will be shared with the other components
    {
      title: "The lord of the rings",
      auther: "J.R.R. Tolkien",
      id: 0,
      isCompleted: false,
    },
    {
      title: "Game of thrones",
      auther: "George R.R. Martin",
      id: 1,
      isCompleted: false,
    }, 
  ]);

  // local storage  1-(get data & convert the object to string & store it ) 2-(set new data to localStorage)
  const intialvalue =()=> { if ( localStorage.getItem('books') !== null )
   {JSON.parse(localStorage.getItem('books'))} ;  
   setBooks(JSON.parse(localStorage.getItem('books'))) } ; 

  useEffect(() => { intialvalue()  }, []) ;
  useEffect(()=>{ localStorage.setItem('books',JSON.stringify(Books)) ;  } ,[Books] );
  
    

  // function to append a new book object to the array of objects of books
  const addBooks = (title, auther) =>
    setBooks([...Books, { title, auther, id: uuid(), isCompleted: false }]);

  // function to remove book (comparing id's of books to the clicked one if it matches it will not return it)
  const removeBooks = (id) => setBooks(Books.filter((Book) => Book.id !== id));

  //edit Book by changing (title) value of the current book & pass the other values then save it to the state
  const editBooks = (id , title , auther ) => {
      const newBooks = Books.map(book=>(book.id===id) ? {title,auther,id ,isCompleted: false }:book ) ;
      setBooks(newBooks) } ;

  //edit auther by changing (auther) value of the current book & pass the other values then save it to the state    
  const editAuther = (id , auther ,title  ) => {
      const newBooks = Books.map(book=>(book.id===id) ? {title,auther,id ,isCompleted: false }:book ) ;
      setBooks(newBooks) } ;  

   // mark book completed by reversing (isCompleted) value & use it later to change style    
  const completedBook = (id,title, auther , isCompleted) => {
     const newBooks = Books.map(book=>(book.id===id) ?  {title,auther,id ,isCompleted:!isCompleted }:book  );   
      setBooks(newBooks)  };

  return (      //pass the state & the functions as props to be used at the other components
    <BooksContext.Provider value={{ Books, addBooks, removeBooks, editBooks, editAuther, completedBook  }}  >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
