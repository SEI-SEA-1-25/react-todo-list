import { Component } from 'react'
import ToDoList from './components/ToDo-List/ToDoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
      
      <ToDoList />
      </div>
    )
  }
}