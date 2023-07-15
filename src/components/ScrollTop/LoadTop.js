import React, { Component } from "react";
import { useLocation } from "react-router-dom";

const withLocation = Component => props => {
    const location = useLocation();

    return <Component {...props} location={location} />;
};

class LoadTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return <React.Fragment />;
    }
}

export default withLocation(LoadTop);