import './App.scss';
import Footer from './Components/Footer/Footer';
import { Galery } from './Components/Galery/Galery';

import FetchProvider from './context/FetchContext';

function App() {

  return (
    
    <div className="App">
      <FetchProvider>
          <Galery />
          <Footer/>
      </FetchProvider>


    </div>
  );
}

export default App;
