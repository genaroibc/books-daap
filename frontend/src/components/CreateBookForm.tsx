import { useId } from "react"
import { BookData } from "../types"
import { isNonEmptyValue } from "../utils/isNonEmptyValue"

type Props = {
  onSubmit: (bookData: BookData) => void
}

const FORM_INPUT_NAMES = {
  title: "title",
  description: "description",
  author: "author"
}

export function CreateBookForm({ onSubmit }: Props) {
  const bookTitleInputId = useId()
  const bookDescriptionInputId = useId()
  const bookAuthorInputId = useId()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const title = (
      formData.get(FORM_INPUT_NAMES.title) as string | null
    )?.trim()
    const description = (
      formData.get(FORM_INPUT_NAMES.description) as string | null
    )?.trim()
    const author = (
      formData.get(FORM_INPUT_NAMES.author) as string | null
    )?.trim()

    if (
      isNonEmptyValue(title) &&
      isNonEmptyValue(description) &&
      isNonEmptyValue(author)
    ) {
      onSubmit({
        title,
        description,
        author
      })
    }
  }

  return (
    <form
      className="flex flex-col gap-4 bg-zinc-900 rounded-md p-4"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col justify-center gap-2">
        Title
        <input
          className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id={bookTitleInputId}
          type="text"
          placeholder="Lord of the Rings"
          required
          minLength={3}
          name={FORM_INPUT_NAMES.title}
        />
      </label>

      <label className="flex flex-col justify-center gap-2">
        Description
        <input
          className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id={bookDescriptionInputId}
          type="text"
          placeholder="The saga of a group of heroes who..."
          required
          minLength={3}
          name={FORM_INPUT_NAMES.description}
        />
      </label>

      <label className="flex flex-col justify-center gap-2">
        Author name
        <input
          className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id={bookAuthorInputId}
          type="text"
          placeholder="J. R. R. Tolkien"
          required
          minLength={3}
          name={FORM_INPUT_NAMES.author}
        />
      </label>

      <button
        type="submit"
        className="w-fit mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mx-auto"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Create book
        </span>
      </button>
    </form>
  )
}
