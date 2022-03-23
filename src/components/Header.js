import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header
          style={{
            borderBottom: "1px solid #ccc",
            padding: "0px 40px",
            fontFamily: "sans-serif",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              // center
              textAlign: "center",
            }}
          >
            Local Storage Note App 📖
          </h1>
          <p>
            This is a simple note app that uses your browser's local storage to
            save your notes.
          </p>
        </header>
      </>
    );
  }
}

export default Header;
