import React from "react";

function CRUDAppHomepage() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#e3f2fd",
    minHeight: "100vh",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #1976d2, #64b5f6)",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
  };

  const contentStyle = {
    marginTop: "120px",
    textAlign: "center",
  };

  const welcomeTextStyle = {
    color: "#0d47a1",
    fontSize: "32px",
    margin: "20px 0",
    fontWeight: "bold",
  };

  const descriptionStyle = {
    color: "#1565c0",
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>CRUD App</h1>
      </header>
      <section style={contentStyle}>
        <div style={welcomeTextStyle}>Welcome to the CRUD Application!</div>
        <p style={descriptionStyle}>
          Efficiently manage your data with our intuitive and user-friendly
          interface.
        </p>
      </section>
    </div>
  );
}

export default CRUDAppHomepage;
