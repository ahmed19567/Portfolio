 import './App.css';
 import Header from './Component/Header/Header'
 import Body from './Component/Body/Body'
 import About from './Component/About/About'
 import Work from './Component/Work/Work'
 import Contact from './Component/Contact/Contact'

function App() {
  return (
    <div className="App">
    <Header/>
    <Body/>
    <Work/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
