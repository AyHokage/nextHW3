import { toDos } from "../../../../lib/todos"
import { todoType } from "@/types"

interface Props {
    todo: todoType
}

const todoDetails = ({todo}: Props) => {
  return (
    <div>
        <h1>{todo.title}</h1>
        <h2>{todo.completed ? 'completed' : 'not completed'}</h2>
    </div>
  )
}

export default todoDetails

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {todoId: '1'}
            },
            {
                params: {todoId: '2'}
            }
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context: any) {
  const {params} = context;
  const todo = toDos.find(t => t.id === Number(params.todoId))

  return {
    props: {
        todo: todo
    }
  }
}