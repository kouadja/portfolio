import React, { Component } from 'react';

class ScrollColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'transparent',
    };
    this.scrollContainerRef = React.createRef();
    this.targetDivRef = React.createRef();
  }

  handleScroll = () => {
    const scrollContainer = this.scrollContainerRef.current;
    const targetDiv = this.targetDivRef.current;
    if (!scrollContainer || !targetDiv) return;

    const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
    const targetDivTop = targetDiv.getBoundingClientRect().top;

    if (targetDivTop < scrollContainerTop + window.innerHeight) {
      const percentage = (targetDivTop - scrollContainerTop) / window.innerHeight;
      const newBgColor = `rgba(18, 37, 69, ${percentage})`;
      this.setState({ bgColor: newBgColor });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { bgColor } = this.state;

    return (
      <div ref={this.scrollContainerRef} style={{ height: '100vh', overflowY: 'scroll' ,}}>
        <div style={{ height: '800px' }}></div>
        <div
          ref={this.targetDivRef}
          style={{
            height: '300px',
            backgroundColor: bgColor,
            transition: 'background-color 0.3s ease',
          }}
        >
          Scroll jusqu'à cette div pour voir le changement de couleur
        </div>
        <div style={{ height: '800px', }}></div>
      </div>
    );
  }
}

export default ScrollColorChange;
