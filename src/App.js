
import { Header } from './pages/header/Header';
import { Home } from './pages/home/Home';
import { Footer } from './pages/footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Offering } from './pages/offering/Offering';
import { Prologue } from './pages/prologue/Prologue';
import { Leadership } from './pages/leadership/Leadership';
// import { Careers } from './pages/careers/Careers';
import { CHR } from './pages/chr/CHR.jsx';
import { Signin } from './pages/log/Signin';
import { Signup } from './pages/log/Signup';

// import { About } from './pages/component/About';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/prolouge" element={<Prologue/>} />
        <Route exact path="/leadership" element={<Leadership/>} />
        <Route exact path="/Offering" element={<Offering/>} />
      

        <Route exact path="/chr" element={<CHR/>} />
       
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
      
        {/* <Route exact path="/careers" element={<Careers/>} /> */}

      
      
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
