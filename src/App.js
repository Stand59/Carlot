import './App.css';
import Header from './components/Header';
import CarInfo from './components/CarInfo';
import Navigation from './components/Navigation'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';


function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Main/>
    </>
  );
}

export default App;