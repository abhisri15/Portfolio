import React from 'react';

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, {hasError: boolean}> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can log error here
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary; 