import { Component } from 'react'


export default class ListItem extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.todo} 
                    <button onClick={this.props.handleDeleteItem}>
                        Delete Item
                    </button>
                </li>
            </div>
        )
    }
}