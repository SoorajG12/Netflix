
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import {action,originals,animation,romance} from './urls';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer  from './Components/footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={animation} title='Animation' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <Footer />
    </div>
  );
}

export default App;
