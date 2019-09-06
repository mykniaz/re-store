import React from "react";

import Error from "../Error"

class ErrorBoundary extends React.Component {
    state = {
        hesError: false
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({hesError: true})
    };

    render() {
        if (this.state.hesError) {
            return <Error />;
        }

        return this.props.children;
    };
}

export default ErrorBoundary