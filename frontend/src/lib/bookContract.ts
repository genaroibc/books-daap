import BookContractJSON from "../../../backend/build/contracts/BookContract.json"

const bookContract = window.TruffleContract(BookContractJSON)

bookContract.setProvider(window.ethereum)

export const deployedBooksContract = await bookContract.deployed()
