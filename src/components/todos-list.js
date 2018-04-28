import React, {Component} from 'react';
import Todoslistheader from './todoslist-header.js';
import _ from 'lodash'; //Import loadash library inorder to help us write Javascript methods and functions
import TodosListItem from './todos-list-item.js';


class Todoslist extends Component {
    
    renderItems(){
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
    }


    render(){
        return (
            <table>
                <Todoslistheader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
export default Todoslist;