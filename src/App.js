import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Experiencia from './components/Experiencias';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {

  const [temaClaro, setTemaClaro] = useState(true);

    const alterarTema = () => {
        setTemaClaro(!temaClaro);
    }
  
  return (
    <div>
      <Header alterarTema={alterarTema} temaClaro={temaClaro}/>
      <Banner temaClaro={temaClaro}/>
      <Experiencia temaClaro={temaClaro}/>
      <Footer temaClaro={temaClaro}/>
    </div>
  );
}

export default App;
