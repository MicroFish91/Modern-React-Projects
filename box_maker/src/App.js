import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Box Maker</h1>
      <NewBoxForm />
      <BoxList />
    </div>
  );
}

export default App;
