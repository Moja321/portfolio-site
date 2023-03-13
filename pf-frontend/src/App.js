import logo from "./logo.svg";
//import img1 from "./assets/CardGame1.jpg";
import "./App.css";
import ProjectsBody from "./components/projectsfile/projectsbody";
import Header from "./components/general/header";
//import { SassComponent } from './components/sass/style';
//import Restaurantlist from "./components/todoList/RestaurantList";
//import MiniTwitter from "./components/Twitter/miniTwitter";
//import DateFacts from "./components/datefacts/datefacts";
//import PushupCounter from "./components/increment";
import { Routes, Route } from "react-router-dom";
import Navlink from "./components/general/navlinks";
import { SassComponent } from "./components/sass/style";
import { Contact } from "./components/general/contact";
import { About } from "./components/general/about";
import Footer from "./components/general/footer";

const imgUrl = {
  url: "#",
};

function App() {
  return (
    <div className="App">
      <Header image={imgUrl} />

      <Navlink />
      {/* <h1>HELLO THERE!!!!!!!!!!!</h1> */}
      <Routes>
        <Route path="/" element={<ProjectsBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/restaurant" element={<Restaurantlist />} />
        <Route path="/twitter" element={<MiniTwitter />} />
        <Route path="/pushup" element={<PushupCounter />} />
        <Route path="/datefact" element={<DateFacts />} /> */}
      </Routes>

      {/* <SassComponent/> */}

      {/* <DateFacts />
      <MiniTwitter />
      <Restaurantlist />
      <ProjectsBody /> */}
      <Footer />
    </div>
  );
}

export default App;
