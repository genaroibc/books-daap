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
    <main className="max-w-4xl mx-auto my-32">
      <h1 className="font-bold mb-6">Books Dapp</h1>
      <h2 className="font-semibold text-2xl">A decentralized books library</h2>

      <h3 className="font-medium text-xl my-12 mb-4 text-center">
        Submit a new book
      </h3>
      <CreateBookForm onSubmit={handleCreateBook} />

      <h3 className="font-medium text-xl my-12 mb-4 text-center">Books list</h3>
      <section className="flex flex-col gap-4">
        {books.map(({ author, description, title }) => (
          <BookCard
            key={title}
            author={author}
            description={description}
            title={title}
          />
        ))}
      </section>
    </main>
  )
}

export default App
