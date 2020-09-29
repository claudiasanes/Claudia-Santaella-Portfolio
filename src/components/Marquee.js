import React from 'react';
import '../App.scss';

export default class Marquee extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = { content: `${this.props.content} ` };
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const wordWidth = wrapper.getBoundingClientRect().width / 2;
    const containerWidth = wrapper.parentElement.getBoundingClientRect().width;
    const repetitions = Math.ceil(containerWidth / wordWidth);
    this.setState({ content: this.state.content.repeat(repetitions) });
  }
  render() {
    return (
      <div className="marquee-title" ref={this.wrapper}>
        <span>{this.state.content}</span>
        <span>{this.state.content}</span>
      </div>
    );
  }
}
