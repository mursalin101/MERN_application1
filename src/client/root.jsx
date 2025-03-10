import React from "react";

class Root extends React.Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default Root;
