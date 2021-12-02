import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import DetailsProject1 from './components/DetailsProject1/DetailsProject1';
import DetailsProject2 from './components/DetailsProject2/DetailsProject2';
import DetailsProject3 from './components/DetailsProject3/DetailsProject3';
import DetailsProject4 from './components/DetailsProject4/DetailsProject4';
import DetailsProjects5 from './components/DetailsProjects5/DetailsProjects5';
import DetailsProjects6 from './components/DetailsProject6/DetailsProjects6';
import ContactUs from './components/ContactUs/ContactUs';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header></Header>



        <Routes>
          <Route path="/" element={<Home />}>
          </Route>

          <Route path="/home" element={<Home />}>
          </Route>

          {/* <Route path="/about" element={<AboutMe></AboutMe>}>
          </Route> */}
          <Route path="/aboutMe" element={<Banner></Banner>}>
          </Route>
          <Route path="/blog" element={<Blog></Blog>}>
          </Route>
          <Route path="/contuctUs" element={<ContactUs></ContactUs>}>
          </Route>

          <Route path="/projects1" element={<DetailsProject1></DetailsProject1>}>
          </Route>
          <Route path="/projects2" element={<DetailsProject2></DetailsProject2>}>
          </Route>
          <Route path="/projects3" element={<DetailsProject3></DetailsProject3>}>
          </Route>
          <Route path="/projects4" element={<DetailsProject4></DetailsProject4>}>
          </Route>
          <Route path="/projects5" element={<DetailsProjects5></DetailsProjects5>}>
          </Route>
          <Route path="/projects6" element={<DetailsProjects6></DetailsProjects6>}>
          </Route>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
