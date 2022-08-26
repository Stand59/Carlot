import './App.css';
import Header from './components/Header';
import CarInfo from './components/CarInfo';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';


function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;