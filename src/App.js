import './App.css';
import Header from './components/Header';
import CarInfo from './components/CarInfo';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <CarInfo/>
    </>
  );
}

export default App;