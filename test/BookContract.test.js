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
})
