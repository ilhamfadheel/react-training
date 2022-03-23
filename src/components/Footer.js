const Footer = () => {
  return (
    <>
      <footer
        style={{
          borderTop: "1px solid #f5f5f5",
          width: "100%",
          backgroundColor: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <h4
          style={{
            // center
            textAlign: "center",
          }}
        >
          Made by
          <br/>
          <a
            href="https://www.ilhamfadhil.com/"
            style={{
              color: "black",
            }}
          >
            Ilham Fadhil
          </a>
        </h4>
      </footer>
    </>
  );
};

export default Footer;
