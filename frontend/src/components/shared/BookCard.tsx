import { useRef, useState } from "react"
import { BookData } from "../../types"
import { updateBook } from "../../services/updateBook"

export function BookCard({ author, description, title, id }: BookData) {
  const [isEditing, setIsEditing] = useState(false)

  const handleEditButtonClick = () => {
    setIsEditing(true)
  }

  const handleCancelEditing = () => {
    setIsEditing(false)
  }

  const handleSubmitEdition = async () => {
    setIsEditing(false)

    const title = titleRef.current?.innerText
    const description = descriptionRef.current?.innerText
    const author = authorRef.current?.innerText

    if (!title || !description || !author) return

    await updateBook({
      title,
      description,
      author,
      id
    })
  }

  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const authorRef = useRef<HTMLHeadingElement>(null)

  return (
    <article className="p-4 rounded-md bg-slate-800 overflow-hidden relative">
      <button
        onClick={handleEditButtonClick}
        className="bg-transparent absolute top-4 right-4"
      >
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      <h5
        ref={titleRef}
        contentEditable={isEditing}
        className={`font-bold text-xl ${
          isEditing
            ? "text-white bg-slate-700 py-2 px-4 rounded-md outline-dashed outline-1 my-4"
            : "mb-2"
        }`}
      >
        {title}
      </h5>

      <h6
        ref={descriptionRef}
        contentEditable={isEditing}
        className={`text-gray-400 text-lg ${
          isEditing
            ? "text-white bg-slate-700 py-2 px-4 rounded-md outline-dashed outline-1 my-4"
            : "mb-4"
        }}`}
      >
        <small>by</small> <span className="font-medium">{author}</span>
      </h6>

      <p
        ref={authorRef}
        contentEditable={isEditing}
        className={`text-ellipsis overflow-hidden max-w-full ${
          isEditing
            ? "text-white bg-slate-700 py-2 px-4 rounded-md outline-dashed outline-1 my-4"
            : ""
        }}`}
      >
        {description}
      </p>

      {isEditing ? (
        <menu className="flex items-center gap-2 mt-4">
          <li>
            <button onClick={handleCancelEditing} className="bg-red-500">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>

          <li>
            <button onClick={handleSubmitEdition} className="bg-green-500">
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
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </li>
        </menu>
      ) : null}
    </article>
  )
}
