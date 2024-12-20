import  { useState } from 'react';
import './App.css';

function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');

  //添加任务
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks,{text: newTask,confirmed:false}]);
      setNewTask('');
    }
  }

  // 删除任务
  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_,i)=> i !== index)
    setTasks(updatedTask); 
  }

  // 切换任务状态
  const toggleTaskCompletion = (index) => {
    const updatedTask = tasks.map((task,i) => (
      i === index ? {...task,confirmed: !task.confirmed } : task
    ))
    setTasks(updatedTask);
  }

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='input-container'>
        <input 
          type="text" 
          placeholder='Add a new task'
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      
      <ul>
        {tasks.map((task,index) => (
          <li key={index} className={task.confirmed ? 'completed' : ''}>
            <span onClick={()=>toggleTaskCompletion(index)}>
              {task.text}
            </span>
            <button onClick={()=>deleteTask(index)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )


}

export default App;