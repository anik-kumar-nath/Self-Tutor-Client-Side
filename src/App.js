import './App.css';
import Header from './Pages/Shared/Header/Header';

function App() {
  const theme1 = "bg-dark text-white";
  const theme2 = "bg-light text-black";

  return (
    <div className={theme1}>
      <Header></Header>
    </div>
  );
}

export default App;
