import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4b5759" }}>
        <div className="container">
          <Header />
        </div>
      </nav>
      <br />
      <div className="container">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
