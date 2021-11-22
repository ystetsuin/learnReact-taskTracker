import './index.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [addForm, setAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    
    return data;
  }

  //Fetch 1 Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    
    return data;
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(
      tasks.filter((item) => item.id !== id)
    )
  };

  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    setTasks([...tasks, data])
  }

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await response.json();


    setTasks(
      tasks.map((item) => {
        return (item.id === id) ? {...item, reminder: data.reminder} : item
      })
    )
  };

  const toggleAddForm = () => {
    setAddForm(!addForm);
  };

  return (
    <BrowserRouter>
      <div className='app'>
        <Header
        title='Task Tracker'
        onToggleAddForm = {toggleAddForm}
        addForm={addForm}
        />

        {addForm && <AddTask onAdd={addTask}/>}
        
        <Routes>
          <Route path='/' element={(
            (tasks.length > 0)
            ? <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              toggleReminder={toggleReminder}/>
            : <h3>You haven't tasks to do</h3>
          )} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
