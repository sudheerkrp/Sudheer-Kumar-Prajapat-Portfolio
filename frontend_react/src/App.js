import './App.scss';

import {Navbar} from './components';
import {About, Footer, Header, Skills, Testimonial, Work} from './containers';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;