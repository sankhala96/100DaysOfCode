import React from 'react';
import './App.css';
import bubbleSortAlgo from './bubbleSortAlgo';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      array : []
    }
  }

  componentDidMount() {
    this.randomNoGenerator();
  }

  bubbleSort = () => {
    const sortedArray = bubbleSortAlgo(this.state.array);

    this.setState({
      array: sortedArray
    })
  }

  randomNoGenerator = () => {
    const arr = [];
    for(let i=1; i<=150; i++) {
      const no = Math.random() * (300 - 5) + 5;
      arr.push(Math.floor(no));
    }

    this.setState({
      array: arr
    })
  }

  createBars = () => {
    const bars = this.state.array.map(no => {
      return <span className="bar" style={{ height: `${no}px` }}></span>
    })

    return bars;
  }

  render() {
    return (
      <div className="App">
        <div className="button-tool-bar">
          <button onClick={this.bubbleSort}>Bubble Sort</button>
          <button>Merge Sort</button>
          <button>Quick Sort</button>
        </div>
        <div className="bar-container">
          {this.createBars()}
        </div>
      </div>
    )
  }
}

export default App;
