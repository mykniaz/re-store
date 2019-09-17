import * as React from 'react';

import Error from 'components/Error';

class ErrorBoundary extends React.Component {
  public state = {
    hesError: false,
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hesError: true });
  }

  public render() {
    if (this.state.hesError) {
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
