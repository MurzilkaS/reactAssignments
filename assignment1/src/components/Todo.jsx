import React, { Component } from 'react'
import TodoList from './TodoList'

export default class Todo extends Component {
  render() {
    return this.props.todos.map((todo)=>(
      <TodoList key={todo.id} todo={todo} delTodo={this.props.delTodo}/>
    ))
  }
}
