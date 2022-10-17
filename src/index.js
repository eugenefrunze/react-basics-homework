import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function Card(props){
    return (
        <div className="card">
            {props.text}
            <Remove taskIndex={props.index} taskRemover={props.remover}/>
        </div>
    )
}

function Remove(props){
    return (
        <button className="removeButton" onClick={
            () => props.taskRemover(props.taskIndex)
        }>Remove</button>
    )
}

function TaskManager(props){
    const inpRef = React.createRef();
    const [tasks, setTasks] = useState([]);

    function addTask(){
        setTasks([...tasks, inpRef.current.value]);
        inpRef.current.value = '';
    }

    function removeTask(index){
        console.log('Remover is here: ' + index);
        const tempTasks = tasks.filter(
            (el, idx) => idx !== index
        );
        setTasks(tempTasks);
    }

    return (
        <div className="container">
            <p className="todo">To do</p>
            {tasks.map(
                (el, idx) => <Card text={el} key={idx} index={idx} remover={removeTask}/>
            )}
            <p className="add">Add</p>
            <input ref={inpRef} className="task"></input>
            <button className="addToDo" onClick={() => addTask()}>Add todo</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TaskManager />);