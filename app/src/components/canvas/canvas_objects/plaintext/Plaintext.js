import React from 'react';
import Sticky from "../sticky/Sticky";

class Plaintext extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Sticky
            id={this.props.id}
            scaleX={this.props.scaleX}
            x={this.props.x}
            y={this.props.y}
            stageX={this.props.stageX}
            stageY={this.props.stageY}
            nextColor={'rgba(0, 0, 0, 0)'}
            height={this.props.height}
            width={this.props.width}
            fontSize={this.props.fontSize}
        />
    );
  }
}

export default Plaintext;