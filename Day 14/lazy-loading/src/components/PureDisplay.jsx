import React, { PureComponent } from 'react';

class PureDisplay extends PureComponent {
  render() {
    const { message } = this.props;

    if (!message) throw new Error("Message prop is missing!");

    return <h3>{message}</h3>;
  }
}

export default PureDisplay;
