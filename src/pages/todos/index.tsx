import Link from "next/link"
import { toDos } from "../../../lib/todos"

const ToDos = () => {
  return (
    <div>
        {toDos.map(t => <div  key={t.id}><Link href={`/todos/${t.id}`}>{t.title}</Link></div>)}
    </div>
  )
}

export default ToDos

