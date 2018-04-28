import React from 'react';

class CreateToDo extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Enter what to do!" />
                <button>Create</button>
            </form>
        );
    }
}
export default CreateToDo;