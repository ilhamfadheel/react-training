import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
