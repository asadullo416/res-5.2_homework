import "./App.scss";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Video  from "./components/Videos/video";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="mainBody">
      <Sidebar />

      <div className='videos'> 
         <div className="videos__container">
          <Video/>
          </div>      
      </div>


      </div>
   
    </div>
  );
}

export default App;
