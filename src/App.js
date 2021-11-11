import logo from './logo.svg';
import './App.css';
import Vote from './components/Vote';

function App() {
  return (
    <div className="App">
      
      <h1 class="heading">This votingsite is build on React - that tiny, little, cruel Bitch!</h1>
      <div class="container">
      <Vote candidate="Sepp" address="Hohenweiler"/>
      <Vote candidate="Hans-Georg" address="Luzern"/>
      <Vote candidate="Timmy" address="Timbuktu"/>
      </div>
    </div>
  );
}

export default App;
