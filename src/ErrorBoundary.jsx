import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can log the error or send it to a monitoring service here
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI here
      return <div>Error occurred!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
