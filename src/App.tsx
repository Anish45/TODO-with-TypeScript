import './App.css';
import TODO from './todo.png'
import Todos from './components/todos'


function App() {
  return (
    <>
    <div className='pt-5'></div>
      <h1 className='App' style={{fontFamily: 'cursive'}}><img src={TODO} height='100px' width='100px' alt='logo'/> TODO APP</h1>
       <Todos />  
    </>
  );
}

export default App;
