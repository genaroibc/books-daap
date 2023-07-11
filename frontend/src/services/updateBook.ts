import { deployedBooksContract } from "../lib/bookContract"
import { BookData } from "../types"

export async function updateBook({
  id,
  author,
  description,
  title
}: BookData): Promise<void> {
  if (!window.ethereum) {
    return
  }

  const userAddress = await window.ethereum.request({
    method: "eth_requestAccounts"
  })

  await deployedBooksContract.updateBook(id, title, description, author, {
    from: userAddress[0]
  })
}
