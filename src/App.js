import './App.css';
import TodoContext from './TodoContext';
import Navbar from './Componets/Navbar';

function App() {
  return (
   <TodoContext>
     <div className="App">
      <Navbar/>
     </div>
   </TodoContext>
  );
}

export default App;
