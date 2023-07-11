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
    <main className="max-w-7xl mx-auto my-32">
      <h1 className="text-center font-bold mb-6">Books Dapp</h1>
      <h2 className="text-center font-semibold text-2xl">
        A decentralized books library
      </h2>

      <section className="grid grid-cols-2 gap-8 my-20">
        <div>
          <h3 className="font-medium text-xl my-12 mb-4 text-center">
            Books list
          </h3>

          <button
            onClick={handleGetBooks}
            className="flex items-center gap-2 my-4"
          >
            <span>refresh</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>

          <section className="flex flex-col gap-4">
            {books.map(({ author, description, title, id }) => (
              <BookCard
                key={title}
                author={author}
                description={description}
                title={title}
                id={id}
              />
            ))}
          </section>
        </div>

        <div className="">
          <h3 className="font-medium text-xl my-12 mb-4 text-center">
            Submit a new book
          </h3>
          <CreateBookForm onSubmit={handleCreateBook} />
        </div>
      </section>
    </main>
  )
}

export default App
