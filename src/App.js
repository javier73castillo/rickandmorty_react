import { useState } from 'react';
import './App.scss';
import { Galery } from './Components/Galery/Galery';
import Header from './Components/Header/Header';

function App() {
  const [input, setInput] = useState('');
  


  return (
    
    <div className="App">
      <Header setInput={setInput}/>
      <Galery />
    </div>
  );
}

export default App;
