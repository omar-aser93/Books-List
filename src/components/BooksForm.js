import React, { useContext , useState } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BooksForm = () => {
    const { addBooks } = useContext(BooksContext);     //get the add function from the context
    
    const [title, setTitle] = useState('');              // state to store the title input value   
    const [auther, setAuther] = useState('');             // state to store the auther input value 

    const handleSubmit =(e)=>{           // prevent refresh & pass the data to the function & clear the inputs
        e.preventDefault();
        addBooks(title,auther);
        setTitle('');
        setAuther('');        
    }
 
    return (                    // form to add new book by calling (handleSubmit) & set the values by oncahnge
   <form className="addForm" onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter title ..."  value={title}
       onChange={(e)=>setTitle(e.target.value)} required />
       <input type="text" placeholder="Enter auther's name ..."  value={auther}
       onChange={(e)=>setAuther(e.target.value)} required />
       <input type="submit" value="Add Book" className="addButton"/>
   </form>
  );
};

export default BooksForm;
