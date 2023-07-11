import { deployedBooksContract } from "../lib/bookContract"
import { BookData } from "../types"

export async function getBooks(): Promise<BookData[]> {
  const booksCount = Number(await deployedBooksContract.booksCount())

  const booksPromises = new Array(Number(booksCount))
    .fill(0)
    .map((_, index) => {
      return deployedBooksContract.books(index) as Promise<BookData>
    })

  const books = (await Promise.allSettled(booksPromises)).map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    ({ value }) => value
  )

  const normalizedBooks = books.map(book => ({
    id: Number(book.id),
    title: book.title,
    description: book.description,
    author: book.author
  }))

  return normalizedBooks
}
