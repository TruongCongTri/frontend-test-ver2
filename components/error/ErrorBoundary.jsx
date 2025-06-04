"use client";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log error to a service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", padding: "1rem" }}>
          <strong>Something went wrong:</strong>
          <pre>{this.state.error?.message || "Unknown error"}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
