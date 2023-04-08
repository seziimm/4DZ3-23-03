import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import TaskList from './components/TaskList/TaskList';

function App() {
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'Coding',
            completed: false
        },
        {
            id: 2,
            task: 'Eat',
            completed: false
        },
        {
            id: 3,
            task: 'Sleep',
            completed: false
        },
        {
            id: 4,
            task: 'Study',
            completed: false
        }
    ]);

    const handleShow = () => setShow(!show);

    const handleChangeCheck = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        setTasks((prevState) => [
            ...prevState,
            {
                id: Math.floor(Math.random  * 100),
                task: newTask,
                completed: false
            }
        ]);
        handleShow();
    };

    const handleDelete = (id) => {
        setTasks((prevState) => prevState.filter((task) => task.id !== id));
    };

    return (
        <div className="App">
            {show && (
                <Modal
                    handleChangeCheck={handleChangeCheck}
                    handleAdd={handleAddTask}
                    handleShow={handleShow}
                />
            )}

            <Button handleClick={handleShow}>Открыть модалку</Button>

            {/* task list */}
            <TaskList handleDelete={handleDelete} list={tasks} />
        </div>
    );
}

export default App;





