console.log('hey'); 

import React from 'react'; 
import ReactDOM from 'react-dom'; 



class Header extends React.Component {
    state = {
        todos: [] 
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        const option = e.target.elements.newItem.value.trim();
        this.addTodo(option); 
    }

    addTodo = (newItem) => {
        this.setState((prevState) => {
            return{todos: prevState.todos.concat(newItem)}
        })
    }

    render(){ 
        return (
            <div>
                <h1>ToDo App</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newItem" />
                    <button>Submit</button>
                </form>

                <ul>
                    {
                        this.state.todos.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }; 
}

ReactDOM.render(<Header />, document.getElementById("app"));