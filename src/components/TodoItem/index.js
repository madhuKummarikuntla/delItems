// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, delTodo} = props
  const {title, id} = todoDetails

  const onDel = () => {
    delTodo(id)
  }

  return (
    <li className="todo-con">
      <p className="des">{title}</p>
      <button className="button" type="button" onClick={onDel}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
