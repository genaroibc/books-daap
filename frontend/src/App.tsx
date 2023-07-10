import "./App.css"
import "@truffle/contract/browser-dist/truffle-contract.min.js"
import { CreateBookForm } from "./components/CreateBookForm"
import { BookData } from "./types"
import { useEffect, useState } from "react"
import { BookCard } from "./components/shared/BookCard"
import { getBooks } from "./services/getBooks"
import { createBook } from "./services/createBook"

function App() {
  const [books, setBooks] = useState<BookData[]>([])

  useEffect(() => {
    handleGetBooks()
  }, [])

  const handleGetBooks = () => getBooks().then(books => setBooks(books))

  if (!window.ethereum) {
    return <h1>Metamask not detected</h1>
  }

  const handleCreateBook = (bookData: BookData) => {
    createBook(bookData).then(() => {
      setTimeout(() => {
        handleGetBooks()
      }, 1000)
    })
  }

  return (
    <main>
      <h1>Books Dapp</h1>

      <CreateBookForm onSubmit={handleCreateBook} />

      <div className="flex flex-col gap-4">
        {books.map(({ author, description, title }) => (
          <BookCard
            key={title}
            author={author}
            description={description}
            title={title}
          />
        ))}
      </div>
    </main>
  )
}

export default App
