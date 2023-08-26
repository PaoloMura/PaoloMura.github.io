import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'

export default function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <Header />
        <Routes>
          <Route path='/' element={<Body className='main-content'/>} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}
