import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'

export default function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <Header />
        <Body className='main-content'/>
        <Footer />
      </HashRouter>
    </div>
  )
}
