import React, { Component } from 'react';
import './demo.scss';
import 'animate.css/animate.css';

export default class Page1 extends Component {
  state = {
    sectionIndex: 0,
  }

  componentDidMount = () => {
    // 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    this.refBackground.addEventListener('animationend', this.hanldAnimationend);
  }

  hanldAnimationend = () => {
    console.log('animation end...');
    this.refBackground.classList.remove('animated', 'bounceInLeft');
  }

  refSection = (ref) => {
    if (ref) {
      this.refBackground = ref;
      console.log('======ref');
      this.refBackground.classList.add('animated', 'bounceInLeft');
    } else {
      delete this.refBackground;
    }
  }

  onClick = () => {
    const sectionIndex = (this.state.sectionIndex + 1) % 3;
    this.setState({ sectionIndex });
  }

  render = () => {
    return (
      <div
        ref={(ref) => this.refSection(ref)}
        className={'section section-' + this.state.sectionIndex}
        onClick={this.onClick}
      />
    );
  }
}
