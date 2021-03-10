import { Component } from 'react'
import ListItem from '../List-Item/ListItem'
// import listArrayItems from './listArrayItems'



export default class ToDoList extends Component {
    state = {
        taskArray: ['Walk', 'Balk', 'Talk']
    }

    // Event Listener
    handleClear = () => {
        this.setState({
            taskArray: []
        })
    }

    handleNewItemChange = (e) => {
        this.setState({
            newItemInput: e.target.value
        })
            // console.log('hi')
    }

    handleNewItemSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState, props) => {
            return {
                taskArray: [...prevState.taskArray, this.state.newItemInput]
            }
        }, () => this.setState({ newItemInput: '' }))
        // console.log('bye')
    }
    
    handleDeleteItem = (index) => {
        this.setState((prevState) => {
            // don't want to mutate the state directly
            let newTaskArray = [...prevState.taskArray]

            // (array position, num of items to delete)
            newTaskArray.splice(index, 1)
            return {
                taskArray: newTaskArray
            }
        })
        console.log(`I live at index:`, index)
        // this.setState({
            
        // })
    }

    render() {
        const listComponents = this.state.taskArray.map((listArrayItem, index) => {
            return (
                <ListItem 
                    key={`${index}`}
                    todo={listArrayItem} 
                    handleDeleteItem={() => { this.handleDeleteItem(index) }}
                />
            )
        })
        return (
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    {listComponents}
                </ul>
                
                <button onClick={this.handleClear}>Clear</button>
                
                <form onSubmit={this.handleNewItemSubmit}>
                    <input 
                        id='item-input'
                        type='text'
                        placeholder='Add item here'
                        onChange={this.handleNewItemChange}
                        value={this.state.newItemInput}
                    />
                    <input 
                        type='submit'
                        value='Save task'
                    />
                </form>
            </div>
        )
    }

}