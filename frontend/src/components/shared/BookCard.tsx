import { BookData } from "../../types"

export function BookCard({ author, description, title }: BookData) {
  return (
    <article className="p-4 rounded-md bg-slate-800 overflow-hidden">
      <h5 className="mb-2 font-bold text-xl">{title}</h5>
      <h6 className="mb-4 text-gray-400 text-lg">
        <small>by</small> <span className="font-medium">{author}</span>
      </h6>
      <p className="text-ellipsis overflow-hidden max-w-full">{description}</p>
    </article>
  )
}
