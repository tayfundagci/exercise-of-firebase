import { db } from "../firebase/config";
import { doc, deleteDoc } from "@firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    // console.log(id);
    const ref = doc(db, "books", id);
    await deleteDoc(ref);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {" "}
            <span onClick={() => handleClick(book.id)} className="X">
              🗑️
            </span>{" "}
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
