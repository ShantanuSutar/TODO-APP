import { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{ task: "Eat" }, { task: "Sleep" }] };
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        })
        return (
            < div >
                <h2>Todo List!</h2>
                <ul>
                    {todos}
                </ul>
            </div >

        )
    }
}
export default TodoList;