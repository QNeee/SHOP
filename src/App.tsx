import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { useIsmobileWidth } from './Helper';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      {useIsmobileWidth() ? <Footer /> : null}
    </div>
  );
}

export default App;
