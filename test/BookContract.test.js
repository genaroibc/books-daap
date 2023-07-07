const BookContract = artifacts.require("BookContract")

contract("BookContract", async accounts => {
  let contract

  before(async () => {
    contract = await BookContract.deployed()
  })

  it("deployed successfully", async () => {
    assert(contract.address != null)
  })

  it("returns first book", async () => {
    const book = await contract.books(0)

    assert.equal(book.title, "Lord of the Rings")
  })

  it("creates book", async () => {
    const title = "1984"
    const author = "George Orwell"
    const description = "A book about a dystopian future"

    const result = await contract.createBook(title, description, author)

    const bookEvent = result.logs[0].args

    assert.equal(bookEvent.title, title)
    assert.equal(bookEvent.description, description)
    assert.equal(bookEvent.author, author)
  })

  it("updates book", async () => {
    const id = 0
    const newTitle = "Crime and Punishment"
    const newAuthor = "Fyodor Dostoevsky"
    const newDescription =
      "Guilt, murder, redemption, and psychological torment in 19th-century Russia."

    await contract.updateBook(id, newTitle, newDescription, newAuthor)

    const updatedBook = await contract.books(id)

    assert.equal(updatedBook.title, newTitle)
    assert.equal(updatedBook.author, newAuthor)
    assert.equal(updatedBook.description, newDescription)
  })

  it("deletes book", async () => {
    const id = 1

    const book = await contract.books(id)

    assert(book.title === "1984")

    await contract.deleteBook(id)

    const deletedBook = await contract.books(1)

    assert(deletedBook.title === "")
  })
})
