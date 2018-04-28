//import React in order to create components
import React, {Component} from 'react';
import CreateToDo from './create-todo.js'
import Todoslist from './todos-list.js';

const todos = [
    {
        task: 'learn react',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
]


//App Componenet
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: todos
        }
    }

    render(){
        return (
            <div>
                <h1>React Todo App</h1>
                <CreateToDo />
                <Todoslist todos={this.state.todos}/>
            </div>
        );
    }
}
//Export it in order to be used by other files
export default App;