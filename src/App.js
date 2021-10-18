
import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

const App = () => {

  return (
    <div className="App">
    <h3>To Do List</h3>
    <ToDoInput/>
    <ToDoList/>
    </div>
  );
};

export default App;
