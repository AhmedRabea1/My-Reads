import React from 'react';
import Shelf from './Shelf';

const Shelves = ({books,updateShelf}) => {

    const currentlyReading = books.filter((b)=>b.shelf === "currentlyReading");
    const wantToRead = books.filter((b)=>b.shelf === "wantToRead");
    const read = books.filter((b)=>b.shelf === "read");
    return ( 
        <div>
            <Shelf title = "Currently Reading" books = {currentlyReading} updateShelf={updateShelf}/>
            <Shelf title = "Want To Read" books = {wantToRead} updateShelf={updateShelf}/>
            <Shelf title = "Read" books = {read} updateShelf={updateShelf}/>
        </div>
     );
}
 
export default Shelves;