import './App.css'
import AppRoute from './routes/AppRoute';
import "./index.css";
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow pt-20">
    <AppRoute />
    </div>
    <Footer />
    </div>
    </>
  )
}

export default App
