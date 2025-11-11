import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: "#fff0f0",
            border: "2px solid #ff4d4f",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <h3 style={{ color: "#d63031" }}>Oops! Something went wrong.</h3>
          <p style={{ color: "#b00020" }}>{this.state.error?.message}</p>

          <img
            src="https://media.tenor.com/3bTxZ4HdrysAAAAC/error.gif"
            alt="Error animation"
            style={{
              width: "160px",
              borderRadius: "10px",
              margin: "15px auto",
              display: "block",
            }}
          />

          <button
            onClick={this.resetError}
            style={{
              background: "#ff4d4f",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
