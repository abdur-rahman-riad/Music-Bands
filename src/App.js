import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div>
      <div className="main-container">
        <Header></Header>
        <hr />
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
