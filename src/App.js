import logo from "./assets/logo-light.png";
import "./App.css";


function App() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <img
        className="bg-image"
        src={
          "https://cdn.discordapp.com/attachments/1093323921933205614/1095723933594026117/IMG_6203.jpg"
        }
        autoPlay
        loop
        muted
      />
      <div className="content">
        <img
          className="logo-image"
          src={logo}
        />
        <span style={{marginTop:'10px'}}>COMING SOON</span>
      </div>
    </div>
  );
}

export default App;
